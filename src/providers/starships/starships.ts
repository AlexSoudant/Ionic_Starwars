
import { Injectable } from '@angular/core';
import 'rxjs/';
import { Observable } from 'rxjs/Observable';
import { Starship } from './../../interfaces/starship.interface';

import { SwapiProvider } from '../swapi/swapi';
/*
  Generated class for the StarshipsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class StarshipsProvider {

  private starshipsMap = {};

  constructor(private Swapi: SwapiProvider) { }

  getStarshipById(id: string): Observable<Starship> {
    if (this.starshipsMap[id]) {
      return new Observable(observer => {
        observer.next(this.starshipsMap[id]);
        observer.complete();
      })
    } else {
      let resObs = this.Swapi.getStarshipById(id);

      return resObs.map(starship => {
        this.starshipsMap[id] = starship;
        return starship;
      });


    }
  }


  getStarshipsById(ids: Array<string>): Observable<Array<Starship>> {
    const starships: Array<Observable<Starship>> = ids.map(id => this.getStarshipById(id));
    return Observable.forkJoin(starships);
  }

}






