import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sujet-form',
  templateUrl: './sujet-form.component.html',
  styleUrls: ['./sujet-form.component.css']
})
export class SujetFormComponent implements OnInit {

  sujetForm = this.fb.group({
    titre: ['']
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    console.warn(this.sujetForm.value);
  }

}
