import { GoogleMaps, GoogleMap, GoogleMapsEvent, GoogleMapOptions, CameraPosition, MarkerOptions, Marker, LatLng } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { Component } from "@angular/core/";
import { NavController, Platform } from 'ionic-angular';
import { NearbysearchProvider } from '../../providers/nearbysearch/nearbysearch';



@Component({
  selector: 'page-cineproche',
  templateUrl: 'cineproche.html'
})
export class CineProche {

  private places: any[];

  public map: GoogleMap;



  constructor(private googleMaps: GoogleMaps, private geoLocation: Geolocation, private nearby: NearbysearchProvider) { }


  ionViewWillEnter() {
    this.loadMap();
  }

  ionViewCanLeave() {
    return this.map.remove();
  }


  loadMap() {

    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map_canvas');
    // element.innerHTML = '';
    this.map = GoogleMaps.create(element);
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
      console.log('Map is ready!');

      // this.DarkVadorImage = '../../assets/imgs/DarkVadorImage.jpg';

      // Geolocation
      this.geoLocation.getCurrentPosition().then((resp) => {

        let userPosition: LatLng = new LatLng(resp.coords.latitude, resp.coords.longitude);

        let position: CameraPosition<LatLng> = {
          target: userPosition,
          zoom: 15,
          tilt: 0
        };

        this.map.moveCamera(position).then(() => {

          this.map.addMarker({

            position: {
              lat: resp.coords.latitude,
              lng: resp.coords.longitude,

            },
            //  icon: this.DarkVadorImage
          }).then(() => {
            this.nearby.nearbysearch(userPosition, "movie_theater").subscribe((results: any) => {
              this.places = results.results;
              let placesPromises = this.places.map(place => {
                this.map.addMarker({ position: place.geometry.location });
              });
              Promise.all(placesPromises).then(res => {
                console.log("youpi");
              }).catch(error => { console.error(error) });
            }, (status) => console.log(status));

          }).catch((error) => {
            console.log('Error marker', error);
          })
        }).catch((error) => {
          console.log('Error marker', error);
        });



        //   this.addMarker();


      }).catch((error) => {
        console.log('Error getting location', error);
      });
    }).catch((error) => {
      console.log('Error getting location', error);
    });




  }

}