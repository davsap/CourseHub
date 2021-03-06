import { HomeComponent } from './content/home/home.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormationComponent } from './content/formation/formation.component';
import { LoginComponent } from './content/login/login.component';
import { InscriptionComponent } from './content/inscription/inscription.component';
import { CoursFormComponent } from './content/formation/sujet/cours/coursform/coursform.component';
import { DashboardComponent} from './content/formation/dashboard/dashboard.component';
import { EvaluationComponent } from './evaluation/evaluation.component';
import { FormationDetailComponent } from './content/formation/formation-detail/formation-detail.component';
import { FormationFormComponent } from './content/formation/formation-form/formation-form.component';
import { FormationAdminComponent } from './content/formation/formation-admin/formation-admin.component';
import { CoursDetailComponent } from './content/formation/sujet/cours/cours-detail/cours-detail.component';
import { SujetFormComponent } from './content/formation/sujet/sujet-form/sujet-form.component';
import { UpdateFormationComponent } from './content/formation/update-formation/update-formation.component';


const appRoutes: Routes = [
  { path: '',  redirectTo: '/home',  pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'formation',  component: FormationComponent},
  { path: 'formation/:id',  component: FormationDetailComponent},
  { path: 'dashboard/:id',  component: DashboardComponent},
  { path: 'login',  component: LoginComponent},
  { path: 'signin',  component: InscriptionComponent},
  { path: 'formationform',  component: FormationFormComponent },
  { path: 'formationadmin/:id',  component: FormationAdminComponent },
  { path: 'formation/:id/sujet/:ids/cours/:idc',  component: CoursDetailComponent },
  /* { path: 'formation/:id/sujetform',  component: SujetFormComponent }, */
  { path: 'formation/:id/sujet/:ids/cours', component: CoursFormComponent},
  { path: 'formationupdate/:id', component: UpdateFormationComponent},
  { path: 'formationupdate/edit/:id', component: FormationFormComponent},
  // {path: 'sujet', component: SujetListComponent},
  {path: 'eval', component: EvaluationComponent},
  // **************************************************
     // ********************************** ADDED BY DAVID 16/09/2018 ******************
  // ************************************************************************************
   { path: 'formationupdate/:id/sujet/:ids/cours',  component: CoursFormComponent },
  { path: 'formationupdate/:id/sujet/:ids/cours/:idc',  component: CoursFormComponent },
  // { path: 'formation/:id/sujet/:ids/cours/:idc',  component: CoursDetailComponent},
  { path: 'formationupdate/:id/sujet',  component: SujetFormComponent },
  { path: 'formationupdate/:id/sujet/:ids',  component: SujetFormComponent }
  // ************************************************************************************
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
