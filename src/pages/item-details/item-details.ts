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
  private planetId: string;
  private starshipId: string;
  private vehicleId: string;
  public people: People;
  public film: Film;
  public planet: Planet;
  public starship: Starship;
  public vehicle: Vehicle;
  public peoples: Observable<People[]>;
  public planets: Observable<Planet[]>;
  public starships: Observable<Starship[]>;
  public vehicles: Observable<Vehicle[]>;
  public films: Observable<Film[]>;

  private itemToDisplay: Object = {};
  private type


  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public filmProvider: FilmProvider,
    public peopleProvider: PeopleProvider,
    public planetProvider: PlanetProvider,
    public starshipsProvider: StarshipsProvider,
    public vehiclesProvider: VehiclesProvider
  ) {

    console.log('item to display', this.itemToDisplay)

    if (navParams.get("itemType") == 'people')
      this.peopleId = navParams.get("itemId");
    else if (navParams.get("itemType") == 'planet')
      this.planetId = navParams.get("itemId");
    else if (navParams.get("itemType") == 'starship')
      this.starshipId = navParams.get("itemId");
    else if (navParams.get("itemType") == 'vehicle')
      this.vehicleId = navParams.get("itemId");

  }



  ngOnInit() {

  }

  goToDetailsPage(id: string) {
    this.navCtrl.push(MoviedetailsPage, {
      filmId: id
    });
  }

  addImg(element: any): any {
    element['img'] = element['name'].replace(/ /g, '_') + ".jpg"
    return element

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailsPage');

    this.type = this.navParams.get("itemType");

    if (this.navParams.get("itemType") == 'people') {
      this.peopleProvider.getPeopleById(this.peopleId).subscribe(
        ((res) => {

          this.people = res;
          console.log(this.people);
          this.peoples = this.peopleProvider.getPeoplesById(this.people.species)
          .map(peoples => peoples.map(people => this.addImg(people)));
          this.films = this.filmProvider.getFilmsById(this.people.films);

          this.itemToDisplay['name'] = this.people.name;
          this.itemToDisplay['path'] = 'personnages';
          this.itemToDisplay['prop1'] = this.people.gender;
          this.itemToDisplay['prop1_name'] = 'Gender';
          this.itemToDisplay['prop2'] = this.people.birth_year;
          this.itemToDisplay['prop2_name'] = 'Birth year';
          //this.itemToDisplay['srcImg'] = "assets/imgs/personnages/{{people.img}}";

          this.addImg(this.itemToDisplay)

        }),
        ((error) => {
          console.log(error);
        }),
        () => {
          console.log('FIN');
        }
      );
    }
    else if (this.navParams.get("itemType") == 'planet') {
      this.planetProvider.getPlanetById(this.planetId).subscribe(
        ((res) => {

          this.planet = res;
          console.log(this.planet);
          this.peoples = this.peopleProvider.getPeoplesById(this.planet.residents)
          .map(peoples => peoples.map(people => this.addImg(people)));

          this.films = this.filmProvider.getFilmsById(this.planet.films);

          this.itemToDisplay['name'] = this.planet.name;
          this.itemToDisplay['path'] = 'planetes';
          this.itemToDisplay['prop1'] = this.planet.climate;
          this.itemToDisplay['prop1_name'] = 'Climate';
          this.itemToDisplay['prop2'] = this.planet.diameter;
          this.itemToDisplay['prop2_name'] = 'Diameter';

          //this.itemToDisplay['srcImg'] = "assets/imgs/planetes/{{planet.img}}";

          this.addImg(this.itemToDisplay)

        }),
        ((error) => {
          console.log(error);
        }),
        () => {
          console.log('FIN');
        }
      );
    }
    else if (this.navParams.get("itemType") == 'starship') {
      this.starshipsProvider.getStarshipById(this.starshipId).subscribe(
        ((res) => {

          this.starship = res;
          console.log(this.people);
          this.peoples = this.peopleProvider.getPeoplesById(this.starship.pilots)
          .map(peoples => peoples.map(people => this.addImg(people)));
          this.films = this.filmProvider.getFilmsById(this.starship.films);

          this.itemToDisplay['name'] = this.starship.name;
          this.itemToDisplay['path'] = 'starship';
          this.itemToDisplay['prop1'] = this.starship.length;
          this.itemToDisplay['prop1_name'] = 'Size';
          this.itemToDisplay['prop2'] = this.starship.passengers;
          this.itemToDisplay['prop2_name'] = 'Nb passengers';

          this.addImg(this.itemToDisplay)
          //this.itemToDisplay['srcImg'] = "assets/imgs/starships/{{starship.img}}";

        }),
        ((error) => {
          console.log(error);
        }),
        () => {
          console.log('FIN');
        }
      );
    }
    else if (this.navParams.get("itemType") == 'vehicle') {
      this.vehiclesProvider.getVehicleById(this.vehicleId).subscribe(
        ((res) => {

          this.vehicle = res;
          console.log(this.people);
          this.peoples = this.peopleProvider.getPeoplesById(this.vehicle.pilots)
          .map(peoples => peoples.map(people => this.addImg(people)));
          this.films = this.filmProvider.getFilmsById(this.vehicle.films);

          this.itemToDisplay['name'] = this.vehicle.name;
          this.itemToDisplay['path'] = 'vehicules';
          this.itemToDisplay['prop1'] = this.vehicle.length;
          this.itemToDisplay['prop1_name'] = 'Size';

          this.itemToDisplay['prop2'] = this.vehicle.passengers;
          this.itemToDisplay['prop2_name'] = 'Nb passengers';

          this.addImg(this.itemToDisplay)
          //this.itemToDisplay['srcImg'] = "assets/imgs/vehicles/" + this.vehicle.img";

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
}



