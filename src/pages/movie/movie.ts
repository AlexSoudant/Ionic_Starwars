import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MoviedetailsPage } from '../moviedetails/moviedetails';
import { FilmProvider } from './../../prodivers/film/film';
import { Film } from './../../interfaces/film';


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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToDetailsPage(){
      this.navCtrl.push(MoviedetailsPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePage');
  }
}
