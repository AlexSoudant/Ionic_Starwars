
import { Injectable, Inject } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/';
import { Http, Response } from '@angular/http';
import { Film } from './../../interfaces/film.interface';

@Injectable()
export class SwapiProvider {

  private URLAPI: String = 'http://www.swapi.co/api/';

  private KEYS_OF_URLID: Array<String> = ['films', 'characters', 'planets', 'species', 'starships', 'vehicles', 'homeworld', 'url'];

  private NB_ITEM_BY_PAGE: Number = 10;

  constructor(@Inject(Http) private http: Http) { }

  private get(path: String, id: String = '', params: String = ''): Observable<Object> {

    if (id == null) {
      id = '';
    }

    if (params == null) {
      params = '';
    }

    const uri: string = this.URLAPI.toString()
      + path.toString() + (path.toString().length > 0 ? '/' : '')
      + id.toString() + (id.toString().length > 0 ? '/' : '')
      + (params.toString().length > 0 ? '?' : '') + params.toString();

    return this.http.get(uri).map((resp: Response) => {

      const response = resp.json();

      if (response) {
        return response;
      } else {
        return Observable.throw('http request error for : ' + uri);
      }

    }).catch((error: any) => Observable.throw(error.json().error || 'http request error for : ' + uri));

  }

  getPeoplesByName(name: String, page: Number = 1): Observable<Object> {
    if (name || page) {
      const param_name = (name && name.length > 0) ? 'search=' + name : '';
      const param_page = page.valueOf() >= 1 ? 'page=' + page : '';
      return this.get('people', null, param_name + '&' + param_page).map((resp: Object) => {
        if (resp) {
          resp['page'] = this.getPage(resp);
          resp['results'] = resp['results'].map(result => {
            result = this.allUrlsToId(result);
            result['id'] = result['url'];
            return result;
          });
          return resp;
        } else {
          return Observable.throw('unexpected Swapi response for people page ' + page);
        }
      });
    } else {
      return Observable.throw('param Name is undefined');
    }
  }

  getPeopleById(id: String): Observable<Object> {
    if (id) {
      return this.get('people', id).map((resp: Object) => {
        resp = this.allUrlsToId(resp);
        resp['id'] = resp['url'];
        return resp;
      });
    } else {
      return Observable.throw('param ID is undefined');
    }
  }

  getPeoples(page: Number = null): Observable<Object> {
    return this.get('people', null, (page && page.valueOf() >= 1) ? 'page=' + page : null).map((resp: Object) => {
      if (resp) {
        resp['page'] = this.getPage(resp);
        resp['results'] = resp['results'].map(result => {
          result = this.allUrlsToId(result);
          result['id'] = result['url'];
          return result;
        });
        return resp;
      } else {
        return Observable.throw('unexpected Swapi response for people page ' + page);
      }
    });
  }

  getFilmById(id: String): Observable<any> {
    if (id) {
      return this.get('films', id).map((resp: Object) => {
        return this.allUrlsToId(resp);
      });
    } else {
      return Observable.throw('param ID is undefined');
    }
  }

  getNbItemByPage(): Number {
    return this.NB_ITEM_BY_PAGE;
  }

  private getPage(result: Object): Number {
    if (result) {
      if (!result['previous']) {
        return 1;
      } else {
        let lag: number = -1;
        let url: String = result['next'];
        if (!url) {
          lag = 1;
          url = result['previous'];
        }
        const page = url.match('page=[0-9]*')[0];
        if (page && page.length > 5) {
          let res = parseInt(page.slice(5), 10);
          return res += lag;
        }
      }
    }
    return null;
  }

  private allUrlsToId(result: Object): Object {
    for (const key of this.KEYS_OF_URLID) {
      if (result[key.toString()]) {
        if (Array.isArray(result[key.toString()])) {
          result[key.toString()] = result[key.toString()].map(res => res.length > 0 ? this.urlToId(res) : res);
        } else {
          result[key.toString()] = this.urlToId(result[key.toString()]);
        }
      }
    }
    return result;
  }

  private urlToId(url: String): String {
    if (url && url.length > this.URLAPI.length) {
      let id = url.match(this.URLAPI + '[A-Za-z]*/[A-Za-z0-9]*/')[0].slice(0, -1);
      id = id.slice(id.lastIndexOf('/') + 1);
      if (id && id.length > 0) {
        return id.slice();
      }
    }
    return url;
  }

}
