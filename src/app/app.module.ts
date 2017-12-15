import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { Http, Response } from '@angular/http';


import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { config } from './../config/config';

// Native components
import { GoogleMaps } from '@ionic-native/google-maps';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActualityPage } from '../pages/actuality/actuality';
import { SocietyPage } from '../pages/society/society';
import { TheLastJediPage } from '../pages/the-last-jedi/the-last-jedi';
import { MoviePage } from '../pages/movie/movie';
import {MoviedetailsPage } from '../pages/moviedetails/moviedetails';
import { CineProche } from '../pages/cineproche/cineproche';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsProvider } from '../providers/news/news';
import { SwapiProvider } from '../providers/swapi/swapi';
import { FactsProvider } from '../providers/facts/facts';
import { WordsProvider } from '../providers/words/words';
import { FilmProvider } from '../providers/film/film';

import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TheLastJediPage,
    ActualityPage,
    SocietyPage,
    MoviePage,
    MoviedetailsPage,
    CineProche

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config.firebase),
    AngularFirestoreModule.enablePersistence(),
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TheLastJediPage,
    ActualityPage,
    SocietyPage,
    MoviePage,
    MoviedetailsPage,
    CineProche,
  ],
  providers: [
    StatusBar,
    GoogleMaps,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NewsProvider,
    SwapiProvider,
    FactsProvider,
    WordsProvider,
    FilmProvider,
  ]
})
export class AppModule { }
