import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, LatLng } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Component } from "@angular/core/";
import { NavController, Platform } from 'ionic-angular';
@Component({
  selector: 'page-cineproche',
  templateUrl: 'cineproche.html'
})
export class CineProche {
  private DarkVadorImage: string = 'http://pngimg.com/uploads/darth_vader/darth_vader_PNG14.png';


  public map: GoogleMap;



  constructor(private googleMaps: GoogleMaps, private geoLocation: Geolocation) { }


  ionViewDidLoad() {
    this.loadMap();
  }


  loadMap() {


    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map_canvas');

    this.map = this.googleMaps.create(element);


    // Geolocation
    this.geoLocation.getCurrentPosition().then((resp) => {

      let userPosition: LatLng = new LatLng(resp.coords.latitude, resp.coords.longitude);

      let position: CameraPosition<LatLng> = {
        target: userPosition,
        zoom: 15,
        tilt: 0
      };

      this.map.moveCamera(position);

      this.map.addMarker({

        position: {
          lat: resp.coords.latitude,
          lng: resp.coords.longitude,

        },
      })

    }).catch((error) => {
      console.log('Error getting location', error);
    });
    // let markerIcon = {
    //   'url': this.DarkVadorImage,
    //   'size': {
    //     width: Math.round(15),
    //     height: Math.round(15)
    //   }
    // }

    // Wait the MAP_READY before using any methods.
    this.map.one(GoogleMapsEvent.MAP_READY)
      .then(() => {
        console.log('Map is ready!');

        // Now you can use all methods safely.


      }
      );

  }
}