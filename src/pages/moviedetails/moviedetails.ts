import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Film } from '../../interfaces/film.interface';
import { FilmProvider } from '../../providers/film/film';
import { People } from '../../interfaces/people.interface';
import { PeopleProvider } from '../../providers/people/people';
import { Planet } from '../../interfaces/planet.interface';
import { PlanetProvider } from '../../providers/planets/planets';

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
  public peoples: People[]= [];
  public planet: Planet;
  public planets: Planet[]= [];


  constructor(public navCtrl: NavController, 
      public navParams: NavParams, 
      public filmProvider: FilmProvider, 
      public peopleProvider: PeopleProvider,
      public planetProvider: PlanetProvider
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
        this.findAllPeople(this.film)
        this.findAllPlanets(this.film)
      }),
      ((error) => {
        console.log(error);
      }),
      () => {
        console.log('FIN');
      }
    );
   

  }

  findAllPeople(film){
    film.characters.map(id => {

      console.log('character id to look for', id)

      return this.peopleProvider.getPeopleById(id).subscribe(
        ((result) => {
          this.peoples.push(result);
          console.log('all characters',this.peoples)
        }),
        ((error) => {
          console.log(error);
        }),
      );
    })
  }

  findAllPlanets(film){
    film.planets.map(id => {

      console.log('character id to look for', id)

      return this.planetProvider.getPlanetById(id).subscribe(
        ((result) => {
          this.planets.push(result);
          console.log('all planets',this.planets)
        }),
        ((error) => {
          console.log(error);
        }),
      );
    })
  }



}
