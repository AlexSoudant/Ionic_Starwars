import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MoviedetailsPage } from './moviedetails';

@NgModule({
  declarations: [
    MoviedetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(MoviedetailsPage),
  ],
})
export class MoviedetailsPageModule {}
