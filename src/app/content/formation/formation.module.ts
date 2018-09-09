import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationCardComponent } from './formation-list/formation-card/formation-card.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { EvaluationModule } from '../../evaluation/evaluation.module';
import { FormationFormComponent } from './formation-form/formation-form.component';


@NgModule({
  imports: [
    CommonModule, EvaluationModule
  ],
  declarations: [FormationCardComponent, FormationListComponent, FormationDetailComponent, FormationFormComponent],
  exports : [FormationCardComponent, FormationListComponent, FormationDetailComponent]
})
export class FormationModule { }
