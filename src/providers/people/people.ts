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
  private peopleMap = {};

  constructor(private Swapi: SwapiProvider) { }

  /*  history(): Search {
     return this.lastPeopleSearch;
   } */



  getPeopleById(id: string): Observable<People> {
    if (this.peopleMap[id]) {
      return new Observable(observer => {
        observer.next(this.peopleMap[id]);
        observer.complete();
      })
    } else {
      let resObs = this.Swapi.getPeopleById(id);
      // resObs.subscribe(
      //   ((res) => {
      //     this.peopleMap[id] = res;
      //   }),
      //   ((error) => {
      //     console.log(error);
      //   }),
      //   () => {
      //     console.log('FIN');
      //   }
      // );
      return resObs.map(people => {
        this.peopleMap[id] = people;
        return people;
      });


    }
  }

  getPeoplesById(ids: Array<string>): Observable<Array<People>> {
    const peoples: Array<Observable<People>> = ids.map(id => this.getPeopleById(id));
    return Observable.forkJoin(peoples);
  }

  // getPeoplesByName(name: String, page: Number = undefined): Observable<any> {
  //   if (name && name.length && name.length > 0 && (!page || page >= 0)) {
  //     return this.Swapi.getPeoplesByName(name, page || undefined).map((resp: Object) => {
  //       const res = this.objectToSearch(resp);
  //       if (res) {
  //         this.lastPeopleSearch = res;
  //         return res;
  //       } else {
  //         return Observable.throw('unexpected Swapi response');
  //       }
  //     });
  //   }
  
    // private objectToSearch(obj: Object): Search {
    //   if (!obj['results'] || !obj['count'] || !obj['page']) {
    //     return;
    //   }
  
  
    //   this.result.Peoples = obj['results'];
    //   this.result.Pages = Math.ceil(Number(obj['count']) / Number(this.Swapi.getNbItemByPage()));
    //   this.result.Page = obj['page'];
    //   return this.result;
    // } */

}
