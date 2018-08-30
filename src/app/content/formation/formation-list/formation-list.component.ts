import { Component, OnInit, Input } from '@angular/core';
import { Formation } from '../../../model/formation';

@Component({
  selector: 'app-formation-list',
  templateUrl: './formation-list.component.html',
  styleUrls: ['./formation-list.component.css']
})
export class FormationListComponent implements OnInit {
@Input ()formations: Formation[];
  constructor() { }

  ngOnInit() {
  }

}
