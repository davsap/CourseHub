import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarModule } from './navbar/navbar.module';
import { SecurityModule } from './security/security.module';
import { UsersModule } from './users/users.module';
import { ContentModule } from './content/content.module';

@NgModule({
  declarations: [
    AppComponent
  ],
 imports: [
 BrowserModule, ContentModule, NavbarModule, SecurityModule, UsersModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
