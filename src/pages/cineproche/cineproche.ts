import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, LatLng } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Component } from "@angular/core/";
import { NavController, Platform } from 'ionic-angular';

declare var google;

@Component({
  selector: 'page-cineproche',
  templateUrl: 'cineproche.html'
})
export class CineProche {
  places: any[];

  private DarkVadorImage: any;


  public map: GoogleMap;



  constructor(private googleMaps: GoogleMaps, private geoLocation: Geolocation) { }


  ionViewDidLoad() {
    this.loadMap();
  }


  loadMap() {


    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map_canvas');

    this.map = this.googleMaps.create(element);

    this.DarkVadorImage = '../../assets/imgs/DarkVadorImage.jpg';

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
        //  icon: this.DarkVadorImage
      })

      this.getRestaurants(userPosition).then((results: Array<any>) => {
        this.places = results;
        for (let i = 0; i < results.length; i++) {
          this.map.addMarker(results[i]);
        }
      }, (status) => console.log(status));

      //   this.addMarker();


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
  getRestaurants(latLng: LatLng): Promise<Array<any>> {
    var service = new google.maps.places.PlacesService(this.map);
    let request = {
      location: latLng,
      radius: 8047,
      types: ["restaurant"]
    };
    return new Promise((resolve, reject) => {
      service.nearbySearch(request, function (results, status) {
        if (status === google.maps.places.PlacesServiceStatus.OK) {
          resolve(results);
        } else {
          reject(status);
        }

      });
    });

  }

  createMarker(place) {
    let marker = new google.maps.Marker({
      map: this.map,
      animation: google.maps.Animation.DROP,
      position: place.geometry.location
    });
  }

}