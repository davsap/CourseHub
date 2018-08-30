import { Component, OnInit, Input } from '@angular/core';
import { Cours } from '../../../model/cours';

@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css']
})
export class CoursListComponent implements OnInit {
@Input() courses: Cours[];
  constructor() { }

  ngOnInit() {
    /* console.log('courses ' + this.courses.length);
    this.courses.forEach(course => {  console.log(course.titre + '\n'); });
   console.log('courses ' + this.courses.length); */
  }

}
