import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FactsProvider } from './../../providers/facts/facts';
import { Observable } from 'rxjs/Observable';

import { WordsProvider } from './../../providers/words/words';
import { Words } from '../../interfaces/words.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public randomFact: Observable<String>;
  public allWords: Observable<Words[]>;

  constructor(public factsProvider: FactsProvider, wordsProvider: WordsProvider) {
    this.randomFact = factsProvider.getRandom();
    this.allWords = wordsProvider.getAll();

  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');

  }

}
