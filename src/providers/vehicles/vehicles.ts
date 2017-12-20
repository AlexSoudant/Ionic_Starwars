import { Injectable } from '@angular/core';
import 'rxjs/';
import { Observable } from 'rxjs/Observable';
import { Vehicle } from './../../interfaces/vehicle.interface';

import { SwapiProvider } from '../swapi/swapi';

/*
  Generated class for the VehiclesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class VehiclesProvider {


  private vehiclesMap = {};

  constructor(private Swapi: SwapiProvider) { }

  getVehicleById(id: string): Observable<Vehicle> {
    if (this.vehiclesMap[id]) {
      return new Observable(observer => {
        observer.next(this.vehiclesMap[id]);
        observer.complete();
      })
    } else {
      let resObs = this.Swapi.getVehicleById(id);

      return resObs.map(vehicle => {
        this.vehiclesMap[id] = vehicle;
        return vehicle;
      });


    }
  }


  getStarshipsById(ids: Array<string>): Observable<Array<Vehicle>> {
    const vehicles: Array<Observable<Vehicle>> = ids.map(id => this.getVehicleById(id));
    return Observable.forkJoin(vehicles);
  }

}
