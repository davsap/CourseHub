import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { FormationService } from '../../../services/formation.service';
import { Formation } from '../../../model/formation';
import { User } from 'src/app/model/user';
import { CookieService } from 'ngx-cookie-service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-formation-form',
  templateUrl: './formation-form.component.html',
  styleUrls: ['./formation-form.component.css']
})
export class FormationFormComponent implements OnInit {
  formationForm = this.fb.group({
    titre: [null , [Validators.required, Validators.minLength(1)]],
    description: [null , [Validators.required, Validators.minLength(1)]],
    date: [null , [Validators.required]],
    imageFormation: [null , [Validators.required]]
  });
  formation: Formation;
  userMock: User;
  user: User;
  isUpdate: Boolean = false;

  constructor(private fb: FormBuilder, private service: FormationService, private cookieService: CookieService,
     private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.user = JSON.parse(this.cookieService.get('user'));
    this.userMock = new User(this.user.id, null, null, null, null, null, null, null, null, null, null);

    const id: any =  this.route.snapshot.paramMap.get('id');
    if (id != null) {

       this.service.getFormationV2(id).subscribe((value: Formation) =>{ this.formation = value;
        this.isUpdate = true;
       this.formationForm.controls['titre'].setValue(this.formation.titre);
       this.formationForm.controls['description'].setValue(this.formation.description);
       this.formationForm.controls['date'].setValue(this.formation.date);
       });
    }


  }

  onSubmit() {
    console.log('Formulaire soumis : ' + this.formationForm.value);

    let pathFile: String;
    pathFile = this.formationForm.get('imageFormation').value;

    if (pathFile) {
        pathFile = 'assets/images/' +  pathFile.substring(pathFile.lastIndexOf('\\') + 1, pathFile.length);
    }

    this.formation = new Formation(
    null,
    this.formationForm.get('titre').value,
    this.formationForm.get('description').value,
    this.formationForm.get('date').value,
    pathFile ? pathFile.toString() : null ,
    this.userMock);
    this.service.addFormation(this.formation);
    window.location.href = '/dashboard/' + this.user.id;
  }

get id() {
    return this.formationForm.get('id');
  }
get titre() {
  return this.formationForm.get('titre');
}
get description() {
  return this.formationForm.get('description');
}
get date() {
  return this.formationForm.get('date');
}
get imageFormation() {
  return this.formationForm.get('imageFormation');
}
}
