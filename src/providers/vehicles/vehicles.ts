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

  getVehicleById(id: String): Observable<Vehicle> {
    if (this.vehiclesMap[id.toString()]) {
      return new Observable(observer => {
        observer.next(this.vehiclesMap[id.toString()]);
        observer.complete();
      })
    } else {
      let resObs = this.Swapi.getVehicleById(id);

      return resObs.map(vehicle => {
        this.vehiclesMap[id.toString()] = vehicle;
        return vehicle;
      });


    }
  }


  getVehiclesById(ids: Array<String>): Observable<Array<Vehicle>> {
    const vehicles: Array<Observable<Vehicle>> = ids.map(id => this.getVehicleById(id));
    return Observable.forkJoin(vehicles);
  }

}
