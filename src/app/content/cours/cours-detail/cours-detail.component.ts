import { Component, OnInit } from '@angular/core';
import { CoursService } from '../../../services/cours.service';
import { Cours } from '../../../model/cours';

@Component({
  selector: 'app-cours-detail',
  templateUrl: './cours-detail.component.html',
  styleUrls: ['./cours-detail.component.css']
})
export class CoursDetailComponent implements OnInit {
  cours: Cours;
  coursId: number;

  constructor(private service: CoursService) { }

  ngOnInit() {
    this.cours = this.service.getCours(this.coursId);
  }

}
