import { HomeComponent } from './content/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './content/formation/formation.component';
import { LoginComponent } from './content/login/login.component';
import { InscriptionComponent } from './content/inscription/inscription.component';
import { CoursFormComponent } from './content/cours/coursform/coursform.component';
import { SujetListComponent } from './content/sujet/sujet-list/sujet-list.component';
const appRoutes: Routes = [
  { path: '',  redirectTo: '/home',  pathMatch: 'full'},
 { path: 'home', component: HomeComponent },
  { path: 'formation',  component: FormationComponent},
  { path: 'about',  component: HomeComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'signin',  component: InscriptionComponent},
  // TODO : Supprimer Apres ***************************
  {path: 'cours', component: CoursFormComponent},
  {path: 'sujet', component: SujetListComponent}
  // **************************************************
];
@NgModule({
 imports: [
   RouterModule.forRoot(
     appRoutes,
     { enableTracing: false } // <-- debugging purposes only
   )
 ],
 exports: [
   RouterModule
 ]
})
export class AppRoutingModule {}
