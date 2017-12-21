import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Film } from '../../interfaces/film.interface';
import { FilmProvider } from '../../providers/film/film';
import { People } from '../../interfaces/people.interface';
import { PeopleProvider } from '../../providers/people/people';
import { Planet } from '../../interfaces/planet.interface';
import { PlanetProvider } from '../../providers/planets/planets';
import { Starship } from '../../interfaces/starship.interface';
import { StarshipsProvider } from '../../providers/starships/starships';
import { Vehicle } from '../../interfaces/vehicle.interface';
import { VehiclesProvider } from '../../providers/vehicles/vehicles';
import { ItemDetailsPage } from '../item-details/item-details';

import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the MoviedetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviedetails',
  templateUrl: 'moviedetails.html'
})
export class MoviedetailsPage {

  private filmId: string;
  public film: Film;
  public peoples: Observable<People[]>;
  public planets: Observable<Planet[]>;
  public starships: Observable<Starship[]>;
  public vehicles: Observable<Vehicle[]>;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public filmProvider: FilmProvider,
    public peopleProvider: PeopleProvider,
    public planetProvider: PlanetProvider,
    public starshipsProvider: StarshipsProvider,
    public vehiclesProvider: VehiclesProvider
  ) {
    this.filmId = navParams.get("filmId");
  }

  goBackToPreviousPage() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {

    console.log('ionViewDidLoad MoviedetailsPage');
    this.filmProvider.getFilmById(this.filmId).subscribe(
      ((res) => {
        this.film = res;
        console.log(this.film);
        this.peoples = this.peopleProvider.getPeoplesById(this.film.characters)
          .map(peoples => peoples.map(people => this.addImg(people)));
        this.planets = this.planetProvider.getPlanetsById(this.film.planets)
          .map(planets => planets.map(planet => this.addImg(planet)));
        this.starships = this.starshipsProvider.getStarshipsById(this.film.starships)
          .map(starships => starships.map(starship => this.addImg(starship)));
        this.vehicles = this.vehiclesProvider.getVehiclesById(this.film.vehicles)
          .map(vehicles => vehicles.map(vehicle => this.addImg(vehicle)));

      }),
      ((error) => {
        console.log(error);
      }),
      () => {
        console.log('FIN');
      }
    );


  }

  addImg(element: any): any {
    element.img = element.name.replace(/ /g, '_') + ".jpg"
    return element

  }


  goToItemDetailsPage(id: string) {
    this.navCtrl.push(ItemDetailsPage, {
      peopleId: id
    });
  }




}
