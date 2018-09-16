import { Component, OnInit } from '@angular/core';
import { SujetService } from '../../../services/sujet.service';
import { Observable } from '../../../../../node_modules/rxjs';
import { FormationService } from '../../../services/formation.service';
import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-formation-admin',
  templateUrl: './formation-admin.component.html',
  styleUrls: ['./formation-admin.component.css']
})
export class FormationAdminComponent implements OnInit {

constructor(private service: FormationService, private route: ActivatedRoute) { }
formation: Observable<any>;

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.service.getFormationV2(id).subscribe((value: Observable<any>) => this.formation = value);
  }

}
