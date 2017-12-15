import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { Facts } from './../../interfaces/facts.interface';
import { Injectable } from '@angular/core';

/*
  Generated class for the FactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FactsProvider {

  private FACTS_DB_PATH: string = "facts";
  private FACTS_DOC: string = "allFacts";

  private Document: AngularFirestoreDocument<Facts>;
  private allFacts: Observable<Facts>;
  private db: AngularFirestore;


  constructor(db: AngularFirestore) {
    this.db = db;
    this.Document = db.doc<Facts>(this.FACTS_DB_PATH + '/' + this.FACTS_DOC);
    this.allFacts = this.Document.valueChanges();
  }


  getAll(): Observable<Array<String>> {
    return this.allFacts.map(fact => fact.texts);
  }

  // getRandom(): Promise<String | null> {
  //   console.log('test');
  //   return new Promise((resolve, reject) => {
  //     this.getAll().first().toPromise().then(facts => {
  //       let res: String | null;
  //       if (facts.length === 0) {
  //         res = null;
  //       } else {
  //         let rindex = Math.floor((Math.random() * facts.length));
  //         res = facts[rindex];
  //       }
  //       resolve(res);
  //     }).catch(error => {
  //       reject(error);
  //     })
  //   });
  // }

  getRandom(): Observable<String> {
    return this.getAll().map(txts => {
      if (txts.length === 0) {
        return '';
      } else {
        let rindex = Math.floor((Math.random() * txts.length));
        return txts[rindex];
      }
    })
  }

}
