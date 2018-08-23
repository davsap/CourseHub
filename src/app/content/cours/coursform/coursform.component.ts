import { Component, OnInit } from '@angular/core';
import { FormControl} from '@angular/forms';

@Component({
  selector: 'app-coursform',
  templateUrl: './coursform.component.html',
  styleUrls: ['./coursform.component.css']
})
export class CoursFormComponent implements OnInit {

  coursForm = new FormControl('');
  constructor() { }

  ngOnInit() {
  }

}
