import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { config } from './../config/config';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActualityPage } from '../pages/actuality/actuality';
import { SocietyPage } from '../pages/society/society';
import { TheLastJediPage } from '../pages/the-last-jedi/the-last-jedi';
import { MoviePage } from '../pages/movie/movie';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsProvider } from '../providers/news/news';
import { SwapiService } from 'ng2-swapi';
import { SwapiProvider } from '../providers/swapi/swapi';
import { FactsProvider } from '../providers/facts/facts';
import { WordsProvider } from '../providers/words/words';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TheLastJediPage,
    ActualityPage,
    SocietyPage,
    MoviePage
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config.firebase),
    AngularFirestoreModule.enablePersistence(),
    IonicModule.forRoot(MyApp),
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TheLastJediPage,
    ActualityPage,
    SocietyPage,
    MoviePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NewsProvider,
    SwapiService,
    SwapiProvider,
    FactsProvider,
    WordsProvider
  ]
})
export class AppModule { }
