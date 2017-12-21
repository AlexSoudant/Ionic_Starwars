import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { LatLng } from '@ionic-native/google-maps';
import { Observable } from 'rxjs/Observable';
import { config } from '../../config/config';
import 'rxjs/';
import { Http, Response } from '@angular/http';

/*
  Generated class for the NearbysearchProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NearbysearchProvider {

  private GOOGLE_URL = "https://maps.googleapis.com/maps/api/place/radarsearch/json?";
  private RADIUS = 5000;
  constructor( @Inject(Http) private http: Http) {
    console.log('Hello NearbysearchProvider Provider');
  }

  nearbysearch(pos: LatLng, type: String): Observable<Array<any>> {

    const url = this.GOOGLE_URL + "location=" + pos.lat + "," + pos.lng + "&radius=" + this.RADIUS + "&type=" + type + "&key=" + config.googlePlace.apiKey;

    return this.http.get(url).map((resp: Response) => {

      const response = resp.json();

      if (response) {
        return response;
      } else {
        return Observable.throw('http request error for : ' + url);
      }

    }).catch((error: any) => Observable.throw(error.json().error || 'http request error for : ' + url));


  }

}
