import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { config } from './../config/config';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { ActualityPage } from '../pages/actuality/actuality';
import { SocietyPage } from '../pages/society/society';
import { TheLastJediPage } from '../pages/the-last-jedi/the-last-jedi';
import { MoviePage } from '../pages/movie/movie';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { NewsProvider } from '../providers/news/news';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
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
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    TheLastJediPage,
    ActualityPage,
    SocietyPage,
    MoviePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    NewsProvider
  ]
})
export class AppModule { }
