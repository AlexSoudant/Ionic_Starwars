import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { News } from './../../interfaces/news.interface';
/*
  Generated class for the NewsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class NewsProvider {

  private NEWS_DB_PATH: string = "news";
  private itemsCollection: AngularFirestoreCollection<News>;
  private items: Observable<News[]>;

  constructor(db: AngularFirestore) {
    this.itemsCollection = db.collection<News>(this.NEWS_DB_PATH);
    this.items = this.itemsCollection.valueChanges();
  }

  getAll() {
    return this.items;
  }

}
