import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormationService } from '../../../services/formation.service';
import { Formation } from '../../../model/formation';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})
export class FormationFormComponent implements OnInit {
  formationForm = this.fb.group({
    titre: [null , [Validators.required, Validators.minLength(1)]],
    description: [null , [Validators.required, Validators.minLength(1)]],
    latestUpdate: [null , [Validators.required]],
    imageFormation: [null , [Validators.required]]
  });
  formation : Formation;

  constructor(private fb: FormBuilder, private service: FormationService) { }
 
  ngOnInit(): void {}

  onSubmit() {
    console.log('Formulaire soumis : ' + this.formationForm.value);
  this.formation = new Formation(1,
    this.formationForm.get('titre').value,
    this.formationForm.get('description').value,
    this.formationForm.get('latestUpdate').value,
    this.formationForm.get('imageFormation').value,);
    this.service.addFormation(this.formation);
  }

}