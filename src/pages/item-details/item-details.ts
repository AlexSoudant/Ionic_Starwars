import { Component/* , OnInit, Input */ } from '@angular/core';
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

import { Observable } from 'rxjs/Observable';
import { MoviedetailsPage } from '../moviedetails/moviedetails';


/**
 * Generated class for the ItemDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-item-details',
  templateUrl: 'item-details.html',
})
export class ItemDetailsPage {
  private peopleId: string;
  public people: People;
  public film: Film;
  public peoples: Observable<People[]>;
  public planets: Observable<Planet[]>;
  public starships: Observable<Starship[]>;
  public vehicles: Observable<Vehicle[]>;
  public films: Observable<Film[]>;


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public filmProvider: FilmProvider,
    public peopleProvider: PeopleProvider,
    public planetProvider: PlanetProvider,
    public starshipsProvider: StarshipsProvider,
    public vehiclesProvider: VehiclesProvider
  ) {
    this.peopleId = navParams.get("peopleId");
  }



  ngOnInit() {

  }

  goToDetailsPage(id: string) {
    this.navCtrl.push(MoviedetailsPage, {
      filmId: id
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailsPage');
    this.peopleProvider.getPeopleById(this.peopleId).subscribe(
      ((res) => {
        this.people = res;
        console.log(this.people);
        this.peoples = this.peopleProvider.getPeoplesById(this.people.species);
        this.films = this.filmProvider.getFilmsById(this.people.films);
        this.starships = this.starshipsProvider.getStarshipsById(this.people.starships);
        this.vehicles = this.vehiclesProvider.getVehiclesById(this.people.vehicles);

      }),
      ((error) => {
        console.log(error);
      }),
      () => {
        console.log('FIN');
      }
    );
  }
}



