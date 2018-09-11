import { Component, OnInit } from '@angular/core';
import { Formation } from '../../../model/formation';
import { FormationService } from './../../../services/formation.service';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {
formation: Formation;
  constructor(private service: FormationService) { }

  ngOnInit() {
    this.formation = this.service.getFormation(0);
  }

}
