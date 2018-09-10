import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';

import { UsersModule } from './users/users.module';
import { ContentModule } from './content/content.module';
import { AppRoutingModule } from './app-routing.module';
/* import { SidebarModule } from 'ng-sidebar'; */
import { SliderModule } from './slider/slider.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SidebarModule } from './content/sidebar/sidebar.module';
import { EvaluationModule } from './evaluation/evaluation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '../../node_modules/@angular/common/http';
@NgModule({
  declarations: [
    AppComponent
  ],
 imports : [
  BrowserModule, ContentModule, NavbarModule, UsersModule,
  AppRoutingModule, SliderModule, ReactiveFormsModule, FormsModule,
  SidebarModule, EvaluationModule, BrowserAnimationsModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }


