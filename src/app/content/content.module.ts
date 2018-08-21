import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './content.component';
import { HomeComponent } from './home/home.component';
import { FormationComponent } from './formation/formation.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ContentComponent, HomeComponent, FormationComponent, AboutComponent],
  exports : [ContentComponent, HomeComponent, FormationComponent, AboutComponent]
})
export class ContentModule { }
