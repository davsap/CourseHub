import { Component, OnInit } from '@angular/core';
import { Formation } from '../../../model/formation';
import { FormationService } from '../../../services/formation.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formations: Formation[];
  constructor(private service: FormationService) { }

  ngOnInit() {
   this.service.getFormationsV2().subscribe((value: Formation[]) => this.formations = value);
  }

}
