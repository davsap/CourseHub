import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationCardComponent } from './formation-list/formation-card/formation-card.component';
import { FormationListComponent } from './formation-list/formation-list.component';
import { FormationDetailComponent } from './formation-detail/formation-detail.component';
import { EvaluationModule } from '../../evaluation/evaluation.module';


@NgModule({
  imports: [
    CommonModule, EvaluationModule
  ],
  declarations: [FormationCardComponent, FormationListComponent, FormationDetailComponent],
  exports : [FormationCardComponent, FormationListComponent, FormationDetailComponent]
})
export class FormationModule { }
