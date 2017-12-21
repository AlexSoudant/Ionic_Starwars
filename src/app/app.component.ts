import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ActualityPage } from '../pages/actuality/actuality';
import { SocietyPage } from '../pages/society/society';
import { MoviePage } from '../pages/movie/movie';
import { MoviedetailsPage } from '../pages/moviedetails/moviedetails';
import { CineProche } from '../pages/cineproche/cineproche';
import { ItemDetailsPage } from '../pages/item-details/item-details';


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any }>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Actuality', component: ActualityPage },
      { title: 'Society', component: SocietyPage },
      { title: 'Movie', component: MoviePage },
      { title: 'Cinéma', component: CineProche },
      { title: 'Details', component: MoviedetailsPage }
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

}
