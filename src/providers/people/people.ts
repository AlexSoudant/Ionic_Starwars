import { Injectable } from '@angular/core';
import 'rxjs/';
import { Observable } from 'rxjs/Observable';
import { People } from './../../interfaces/people.interface';
import { SwapiProvider } from '../swapi/swapi';
// import { Subject } from 'rxjs/';


@Injectable()
export class PeopleProvider {

  private peopleMap = {};

  constructor(private Swapi: SwapiProvider) { }





  getPeopleById(id: String): Observable<People> {
    if (this.peopleMap[id.toString()]) {
      return new Observable(observer => {
        observer.next(this.peopleMap[id.toString()]);
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
        this.peopleMap[id.toString()] = people;
        return people;
      });


    }
  }

  getPeoplesById(ids: Array<String>): Observable<Array<People>> {
    const peoples: Array<Observable<People>> = ids.map(id => this.getPeopleById(id));
    return Observable.forkJoin(peoples);
  }



}
