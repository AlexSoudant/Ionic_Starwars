import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { config } from './../config/config';

// Native components
import { GoogleMaps } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ActualityPage } from '../pages/actuality/actuality';
import { SocietyPage } from '../pages/society/society';
import { TheLastJediPage } from '../pages/the-last-jedi/the-last-jedi';
import { MoviePage } from '../pages/movie/movie';
import { MoviedetailsPage } from '../pages/moviedetails/moviedetails';
import { CineProche } from '../pages/cineproche/cineproche';
import { ItemDetailsPage } from '../pages/item-details/item-details';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsProvider } from '../providers/news/news';
import { SwapiProvider } from '../providers/swapi/swapi';
import { FactsProvider } from '../providers/facts/facts';
import { WordsProvider } from '../providers/words/words';
import { FilmProvider } from '../providers/film/film';
import { FormProvider } from '../providers/form/form';
import { PeopleProvider } from '../providers/people/people';
import { PlanetProvider } from '../providers/planets/planets';

import { HttpModule } from '@angular/http';
import { StarshipsProvider } from '../providers/starships/starships';
import { VehiclesProvider } from '../providers/vehicles/vehicles';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TheLastJediPage,
    ActualityPage,
    SocietyPage,
    MoviePage,
    MoviedetailsPage,
    CineProche,
    ItemDetailsPage

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(config.firebase),
    AngularFirestoreModule.enablePersistence(),
    IonicModule.forRoot(MyApp),
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
    ItemDetailsPage
  ],
  providers: [
    StatusBar,
    GoogleMaps,
    Geolocation,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NewsProvider,
    SwapiProvider,
    FactsProvider,
    WordsProvider,
    FilmProvider,
    FormProvider,
    PeopleProvider,
    PlanetProvider,
    StarshipsProvider,
    VehiclesProvider,
  ]
})
export class AppModule { }
