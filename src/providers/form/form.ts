import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import { ContactForm } from './../../interfaces/ContactForm.interface';
import { Injectable } from '@angular/core';

/*
  Generated class for the FactsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FormProvider {

  private FACTS_DB_PATH: string = "form";
  private itemsCollection: AngularFirestoreCollection<ContactForm>;
  private item: Observable<ContactForm[]>;
  private db: AngularFirestore;


  constructor(db: AngularFirestore) {
    this.db = db;
    this.itemsCollection = db.collection<ContactForm>('items');
    // this.items = this.itemsCollection.valueChanges();
  }

  pushMessage(item) {
    this.itemsCollection.add(item);
  }
}
