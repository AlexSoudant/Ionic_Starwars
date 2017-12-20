import { Injectable } from '@angular/core';
import 'rxjs/';
import { Observable } from 'rxjs/Observable';
import { Planet } from './../../interfaces/planet.interface';

import { SwapiProvider } from '../swapi/swapi';


@Injectable()
export class PlanetProvider {

  private planetsMap = {};

  constructor(private Swapi: SwapiProvider) { }

  getPlanetById(id: string): Observable<Planet> {
    if (this.planetsMap[id]) {
      return new Observable(observer => {
        observer.next(this.planetsMap[id]);
        observer.complete();
      })
    } else {
      let resObs = this.Swapi.getPlanetById(id);

      return resObs.map(planet => {
        this.planetsMap[id] = planet;
        return planet;
      });


    }
  }


  getPlanetsById(ids: Array<string>): Observable<Array<Planet>> {
    const planets: Array<Observable<Planet>> = ids.map(id => this.getPlanetById(id));
    return Observable.forkJoin(planets);
  }

}
