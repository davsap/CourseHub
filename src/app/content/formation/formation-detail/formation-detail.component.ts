import { Component, OnInit } from '@angular/core';
import { Formation } from '../../../model/formation';
import { FormationService } from './../../../services/formation.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-formation-detail',
  templateUrl: './formation-detail.component.html',
  styleUrls: ['./formation-detail.component.css']
})
export class FormationDetailComponent implements OnInit {
  formation: Formation;
   constructor(private service: FormationService, private route: ActivatedRoute) { }

   ngOnInit(): void {
     const id = +this.route.snapshot.paramMap.get('id');
     this.service.getFormationV2(id).subscribe((value: Formation) => this.formation = value);
   }
}

