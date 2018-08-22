import { HomeComponent } from './content/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './content/formation/formation.component';
import { LoginComponent } from './content/login/login.component';
import { InscriptionComponent } from './content/inscription/inscription.component';
const appRoutes: Routes = [
  { path: '',  redirectTo: '/home',  pathMatch: 'full'},
 { path: 'home', component: HomeComponent },
  { path: 'formation',  component: FormationComponent},
  { path: 'about',  component: HomeComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'signin',  component: InscriptionComponent},
];
@NgModule({
 imports: [
   RouterModule.forRoot(
     appRoutes,
     { enableTracing: true } // <-- debugging purposes only
   )
 ],
 exports: [
   RouterModule
 ]
})
export class AppRoutingModule {}
