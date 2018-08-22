import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { FormationComponent } from './formation/formation.component';
import { AboutComponent } from './about/about.component';
import { RouterModule } from '@angular/router';
import { SliderModule } from '../slider/slider.module';
import { LoginComponent } from './login/login.component';
import { InscriptionComponent } from './inscription/inscription.component';


@NgModule({
  imports: [
    CommonModule, RouterModule, SliderModule
  ],
  declarations: [ContentComponent, HomeComponent, FormationComponent, AboutComponent, LoginComponent, InscriptionComponent],
  exports : [ContentComponent, HomeComponent, FormationComponent, AboutComponent, LoginComponent, InscriptionComponent]
})
export class ContentModule { }
