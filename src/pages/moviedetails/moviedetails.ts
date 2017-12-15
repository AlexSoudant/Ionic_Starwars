import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Film } from '../../interfaces/film.interface';
import { FilmProvider } from '../../providers/film/film';




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

  constructor(public navCtrl: NavController, public navParams: NavParams, public filmProvider: FilmProvider) {
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
