import { HomeComponent } from './content/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './content/formation/formation.component';
import { LoginComponent } from './content/login/login.component';
import { InscriptionComponent } from './content/inscription/inscription.component';
import { CoursFormComponent } from './content/cours/coursform/coursform.component';
import { SujetListComponent } from './content/sujet/sujet-list/sujet-list.component';
import { AboutComponent } from './content/about/about.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { FormationDetailComponent } from './content/formation/formation-detail/formation-detail.component';
import { FormationFormComponent } from './content/formation/formation-form/formation-form.component';


const appRoutes: Routes = [
  { path: '',  redirectTo: '/home',  pathMatch: 'full'},
 { path: 'home', component: HomeComponent },
  { path: 'formation',  component: FormationComponent},
  { path: 'formation/:id',  component: FormationDetailComponent},
  { path: 'about',  component: AboutComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'signin',  component: InscriptionComponent},
  { path: 'formationform',  component: FormationFormComponent },
  // TODO : Supprimer/Modifier Apres ***************************
  {path: 'cours', component: CoursFormComponent},
  {path: 'sujet', component: SujetListComponent},
  {path: 'eval', component: EvaluationComponent},
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
