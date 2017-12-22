import { IonicPage/* , NavController, NavParams */ } from 'ionic-angular';
import { Component } from '@angular/core';
import { NewsProvider } from './../../providers/news/news';
import { Observable } from 'rxjs/Observable';
import { News } from '../../interfaces/news.interface';
import { SocietyPage } from '../society/society'

/**
 * Generated class for the ActualityPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-actuality',
  templateUrl: 'actuality.html',
})
export class ActualityPage {

  allNews: Observable<News[]>;
  private societyPage: any;

  constructor(public newsProvider: NewsProvider) {

    this.allNews = newsProvider.getAll();
    this.societyPage = SocietyPage;
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ActualityPage');
  }

}
