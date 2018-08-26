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
import { SujetListComponent } from './sujet/sujet-list/sujet-list.component';
import { CoursFormComponent } from './cours/coursform/coursform.component';
import { AccordionModule } from 'ngx-bootstrap';
import { CoursListComponent } from './cours/cours-list/cours-list.component';


@NgModule({
  imports: [
    CommonModule, RouterModule, SliderModule, AccordionModule.forRoot()
  ],
  declarations: [ContentComponent, HomeComponent, FormationComponent, AboutComponent, LoginComponent,
                  InscriptionComponent, SujetListComponent, CoursFormComponent, CoursListComponent],
  exports : [ContentComponent, HomeComponent, FormationComponent, AboutComponent, LoginComponent, InscriptionComponent]
})
export class ContentModule { }
