import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormationCardComponent } from './formation-list/formation-card/formation-card.component';
import { FormationListComponent } from './formation-list/formation-list.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [FormationCardComponent, FormationListComponent],
  exports : [FormationCardComponent, FormationListComponent]
})
export class FormationModule { }
