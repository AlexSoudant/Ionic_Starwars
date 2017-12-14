import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';

// Native components
import { GoogleMaps, GoogleMap, GoogleMapsEvent, LatLng, CameraPosition, MarkerOptions, Marker } from '@ionic-native/google-maps';

@Component({
  selector: 'page-cineproche',
  templateUrl: 'cineproche.html'
})
export class CineProche {

<<<<<<< HEAD
  private map: GoogleMap;

  constructor(public navCtrl: NavController, private googleMaps: GoogleMaps, public platform: Platform) {
    platform.ready().then(() => {
			this.loadMap();
		});
  }

  loadMap() {
    // create a new map by passing HTMLElement
    let element: HTMLElement = document.getElementById('map');
=======
  public map: GoogleMap;
  constructor(private GoogleMaps: GoogleMaps) { }

  ionViewDidLoad() {
    this.loadMap();
  }

  loadMap() {

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: {
          lat: 43.0741904,
          lng: -89.3809802
        },
        zoom: 18,
        tilt: 30
      }
    };

    this.map = this.GoogleMaps.create('map_canvas', mapOptions);
>>>>>>> e79729d9e83f871d2cd9cbdf35e8cfeae1f3ffe7

    this.map = this.googleMaps.create(element);
    console.log();
    // listen to MAP_READY event
    // You must wait for this event to fire before adding something to the map or modifying it in anyway
    this.map.one(GoogleMapsEvent.MAP_READY).then(
      () => {
        console.log('Map is ready!');
        // Now you can add elements to the map like the marker
      }
    );

<<<<<<< HEAD
    // create LatLng object
    let ionic: LatLng = new LatLng(43.0741904,-89.3809802);
=======
        // Now you can use all methods safely.
        this.map.addMarker({
          title: 'Ionic',
          icon: 'blue',
          animation: 'DROP',
          position: {
            lat: 43.0741904,
            lng: -89.3809802
          }
        })
          .then(marker => {
            marker.on(GoogleMapsEvent.MARKER_CLICK)
              .subscribe(() => {
                alert('clicked');
              });
          });

      });
  }
}

  // @ViewChild('map') mapRef: ElementRef;
  // map : any;
  // constructor(public navCtrl: NavController) {}

  // ionViewDidLoad() {

  //   // console.log(this.mapRef);
  //   this.ShowMap();
  // }

  // ShowMap(){

  //   const location = new google.maps.LatLng(43.0741904,-89.3809802);

  //   const option = {
  //     center: location,
  //     zoom: 10
  //   }

  //   this.map = new google.maps.Map(this.mapRef.nativeElement, option);
  // }




//   constructor(public navCtrl: NavController, private googleMaps: GoogleMaps, public platform: Platform) {
//     platform.ready().then(() => {
// 			this.loadMap();
// 		});
//   }

//   loadMap() {
//     // create a new map by passing HTMLElement
//     let element: HTMLElement = document.getElementById('map');

//     let map: GoogleMap = this.googleMaps.create(element);

//     // listen to MAP_READY event
//     // You must wait for this event to fire before adding something to the map or modifying it in anyway
//     map.one(GoogleMapsEvent.MAP_READY).then(
//       () => {
//         console.log('Map is ready!');
//         // Now you can add elements to the map like the marker
//       }
//     );

//     // create LatLng object
//     let ionic: LatLng = new LatLng(43.0741904,-89.3809802);
>>>>>>> e79729d9e83f871d2cd9cbdf35e8cfeae1f3ffe7

    // create CameraPosition
    let position: CameraPosition<LatLng> = {
      target: ionic,
      zoom: 18,
      tilt: 30
    };

    // move the map's camera to position
    this.map.moveCamera(position);

    // create new marker
    let markerOptions: MarkerOptions = {
      position: ionic,
      title: 'Ionic'
    };

    this.map.addMarker(markerOptions)
    .then((marker: Marker) => {
        marker.showInfoWindow();
    });
  }

<<<<<<< HEAD
}
=======
>>>>>>> e79729d9e83f871d2cd9cbdf35e8cfeae1f3ffe7
