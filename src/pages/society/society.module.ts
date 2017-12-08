import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SocietyPage } from './society';

@NgModule({
  declarations: [
    SocietyPage,
  ],
  imports: [
    IonicPageModule.forChild(SocietyPage),
  ],
})
export class SocietyPageModule {}
