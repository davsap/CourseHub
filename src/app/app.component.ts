import { Component, OnInit } from '@angular/core';
import { FormationService } from './services/formation.service';
import { Formation } from './model/formation';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],

  })
// comment
export class AppComponent implements OnInit {
  formations: Formation[];
    private toggleSideBar() {
      document.getElementById('sidebar').classList.toggle('expanded');
    }

    constructor(private service: FormationService) {}

ngOnInit() {
  this.service.getFormationsV2().subscribe((value: Formation[]) => this.formations = value);
}
}
