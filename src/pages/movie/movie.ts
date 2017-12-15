import { Component , OnInit, Input} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MoviedetailsPage } from '../moviedetails/moviedetails';
import { FilmProvider } from './../../providers/film/film';
import { Film } from './../../interfaces/film.interface';

/**
 * Generated class for the MoviePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-movie',
  templateUrl: 'movie.html',
})
export class MoviePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private filmProvider: FilmProvider) {
  }

  @Input() filmsId: Array<String> = [];

  films: Array<Object> = [];

  ngOnInit() {
    if (this.filmsId.length > 0) {
      this.filmProvider.getFilmsById(this.filmsId).subscribe(
        ((res) => {
          this.films = res.map(film => { return { film: film, showDetail: false }; });
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

  goToDetailsPage(){
      this.navCtrl.push(MoviedetailsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePage', this.films);
  }
}



