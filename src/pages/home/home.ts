import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FactsProvider } from './../../providers/facts/facts';
import { Observable } from 'rxjs/Observable';

import { WordsProvider } from './../../providers/words/words';
import { Words } from '../../interfaces/words.interface';
// import { App, ViewController } from 'ionic-angular';
import { SocietyPage } from '../society/society'
// import { Subscription } from 'rxjs/Subscription';
// import { NearbysearchProvider } from '../../providers/nearbysearch/nearbysearch';
// import { LatLng } from '@ionic-native/google-maps';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public randomFact: Observable<String>;
  public word: Words;
  private societyPage: any;

  constructor(public factsProvider: FactsProvider, wordsProvider: WordsProvider, public navCtrl: NavController) {
    // this.nearby.nearbysearch({ lat: 48.859294, lng: 2.347589 }, 'cinema').subscribe(x => {
    //   console.log(x)
    // });
    this.randomFact = factsProvider.getRandom();
    wordsProvider.getAll().subscribe(
      word => {
        if (word.length > 0) {
          this.word = word[word.length - 1]
        }
      }
    );
    this.societyPage = SocietyPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

  }



}
