// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { AngularFirestoreCollection, AngularFirestore } from 'angularfire2/firestore';
import { Words } from './../../interfaces/words.interface';

/*
  Generated class for the WordsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class WordsProvider {

  private NEWS_DB_PATH: string = "words";
  // private itemsCollection: AngularFirestoreCollection<Words>;
  // private items: Observable<Words[]>;
  private db: AngularFirestore;

  constructor(db: AngularFirestore) {
    this.db = db;
    /* this.itemsCollection = db.collection<News>(this.NEWS_DB_PATH);
    this.items = this.itemsCollection.valueChanges(); */
  }


  getAll(): Observable<Words[]> {
    return this.db.collection<Words>(this.NEWS_DB_PATH).valueChanges();
  }


}
