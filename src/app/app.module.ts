import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';

import { UsersModule } from './users/users.module';
import { ContentModule } from './content/content.module';
import { AppRoutingModule } from './app-routing.module';
import { SidebarModule } from 'ng-sidebar'; 
import { SliderModule } from './slider/slider.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { EvaluationModule } from './evaluation/evaluation.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '../../node_modules/@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { FooterModule } from './footer/footer.module';
import { CookieService } from 'ngx-cookie-service';

@NgModule({
  declarations: [
    AppComponent
  ],
 imports : [
  BrowserModule, SidebarModule.forRoot(), ContentModule, NavbarModule, UsersModule, FooterModule,
  AppRoutingModule, SliderModule, ReactiveFormsModule, FormsModule,
  EvaluationModule, BrowserAnimationsModule, HttpClientModule
  ],
  providers: [CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }


