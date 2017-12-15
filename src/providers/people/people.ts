import { Injectable } from '@angular/core';
import 'rxjs/';
import { Observable } from 'rxjs/Observable';
import { People } from './../../interfaces/people.interface';
import { SwapiProvider } from '../swapi/swapi';
import { Search } from './../../interfaces/search.interface';
import { Subject } from 'rxjs/';


@Injectable()
export class PeopleProvider {

  private lastPeopleSearch: Search = null;
  private result: Search;

  constructor(private Swapi: SwapiProvider) { }

  history(): Search {
    return this.lastPeopleSearch;
  }

  getPeopleById(id: String): Observable<any> {
    // let result = null;
    // if (this.history()) {
    //   result = this.history().Peoples.find(people => { return people.id === id; });
    // }
    // if (result && result.name) {
    //   // const res = new Subject.create;
    //   // return res.asObservable();
    //   return Observable.create(observer => {
    //     observer.next(result);
    //     observer.complete();
    //   });
    // } else {
    return this.Swapi.getPeopleById(id);
    // }
  }

  getPeoplesByName(name: String, page: Number = undefined): Observable<any> {
    if (name && name.length && name.length > 0 && (!page || page >= 0)) {
      return this.Swapi.getPeoplesByName(name, page || undefined).map((resp: Object) => {
        const res = this.objectToSearch(resp);
        if (res) {
          res.Name = name;
          this.lastPeopleSearch = res;
          return res;
        } else {
          return Observable.throw('unexpected Swapi response');
        }
      });
    } else {
      return this.getPeoples(page);
    }
  }

  getPeoples(page: Number = null): Observable<any> {
    return this.Swapi.getPeoples(page).map((resp: Object) => {
      const res = this.objectToSearch(resp);
      if (res) {
        this.lastPeopleSearch = res;
        return res;
      } else {
        return Observable.throw('unexpected Swapi response');
      }
    });
  }

  private objectToSearch(obj: Object): Search {
    if (!obj['results'] || !obj['count'] || !obj['page']) {
      return;
    }


    this.result.Peoples = obj['results'];
    this.result.Pages = Math.ceil(Number(obj['count']) / Number(this.Swapi.getNbItemByPage()));
    this.result.Page = obj['page'];
    return this.result;
  }

}
