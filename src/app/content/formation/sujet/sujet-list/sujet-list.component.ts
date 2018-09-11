import { Component, OnInit } from '@angular/core';
import { SujetService } from '../../../../services/sujet.service';
import { Sujet } from '../../../../model/sujet';
import { CoursService } from '../../../../services/cours.service';


@Component({
  selector: 'app-sujet-list',
  templateUrl: './sujet-list.component.html',
  styleUrls: ['./sujet-list.component.css']
})
export class SujetListComponent implements OnInit {

  sujets: Sujet[];
  constructor(private service: SujetService, private coursService: CoursService) { }

  ngOnInit() {
    this.sujets = this.service.getSujets(1);
    this.coursService.getCoursListBysujet(1);
  }

}
