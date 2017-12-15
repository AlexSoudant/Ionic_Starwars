import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FactsProvider } from './../../providers/facts/facts';
import { Observable } from 'rxjs/Observable';

import { WordsProvider } from './../../providers/words/words';
import { Words } from '../../interfaces/words.interface';
import { App, ViewController } from 'ionic-angular';
import { SocietyPage } from '../society/society'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public randomFact: Observable<String>;
  public allWords: Observable<Words[]>;
  private societyPage: any;

  constructor(public factsProvider: FactsProvider, wordsProvider: WordsProvider, public navCtrl: NavController) {
    this.randomFact = factsProvider.getRandom();
    this.allWords = wordsProvider.getAll();
    this.societyPage = SocietyPage;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

  }

}
