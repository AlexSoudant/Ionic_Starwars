import { Component/* , OnInit, Input */ } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoviedetailsPage } from '../moviedetails/moviedetails';
import { SocietyPage } from '../society/society'

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

  private societyPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.societyPage = SocietyPage;
  }


  ngOnInit() {

  }

  goToDetailsPage(id: string) {
    this.navCtrl.push(MoviedetailsPage, {
      filmId: id
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MoviePage');
  }
}



