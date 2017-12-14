import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FactsProvider } from './../../providers/facts/facts';
import { Observable } from 'rxjs/Observable';
import { Facts } from '../../interfaces/facts.interface';

import { WordsProvider } from './../../providers/words/words';
import { Words } from '../../interfaces/words.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public randomFacts: Observable<Facts[]>;
  public allWords: Observable<Words[]>;
  
    constructor(public factsProvider: FactsProvider, wordsProvider:WordsProvider) {
  
      this.randomFacts = factsProvider.getAll();
      this.allWords = wordsProvider.getAll();

    }
    ionViewDidLoad() {
      console.log('ionViewDidLoad HomePage' );
      
    }

}
