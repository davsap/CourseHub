import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { matchOtherValidator } from './MatchOtherValidator';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})
export class InscriptionComponent implements OnInit {
  signinForm = new FormGroup({
    'nom': new FormControl(),
    'prenom': new FormControl(),
    'email': new FormControl(),
    'pseudo': new FormControl(),
    'situation': new FormControl(),
    'password': new FormControl(),
    'password2': new FormControl(),
    'ville': new FormControl(),
    'zip': new FormControl(),
    'pays': new FormControl()
  });

  user: User;
  constructor(private fb: FormBuilder, private service: UserService) {
  }

  ngOnInit(): void {
  this.signinForm = this.fb.group({
      nom: [null , [Validators.required, Validators.minLength(1)]],
      prenom: [null , [Validators.required, Validators.minLength(1)]],
      email: [null , [Validators.required, Validators.email]],
      pseudo: [null , [Validators.required, Validators.minLength(4)]],
      situation: [null , [Validators.required, Validators.minLength(4)]],
      password: [null , [Validators.required, Validators.minLength(6), Validators.pattern('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')]],
      password2: [null , [Validators.required, matchOtherValidator('password')]],
      ville: [null , [Validators.required, Validators.minLength(1)]],
      zip: [null , [Validators.required, Validators.pattern('[0-9]{5}')]],
      pays: [null , [Validators.required, Validators.minLength(3)]]
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log('Formulaire soumis : ' + this.signinForm.value);
    this.user = new User (this.signinForm.get('nom').value,
    this.signinForm.get('prenom').value,
    this.signinForm.get('email').value,
    this.signinForm.get('pseudo').value,
    this.signinForm.get('situation').value,
    this.signinForm.get('password').value,
    this.signinForm.get('ville').value,
    this.signinForm.get('zip').value,
    this.signinForm.get('pays').value
  );
  this.service.addUser(this.user);
  }

  get nom() {
    return this.signinForm.get('nom');
  }
  get prenom() {
    return this.signinForm.get('prenom');
  }
  get email() {
    return this.signinForm.get('email');
  }
  get pseudo() {
    return this.signinForm.get('pseudo');
  }
  get situation() {
    return this.signinForm.get('situation');
  }
  get password() {
    return this.signinForm.get('password');
  }
  get ville() {
    return this.signinForm.get('ville');
  }
  get zip() {
    return this.signinForm.get('zip');
  }
  get pays() {
    return this.signinForm.get('pays');
  }

}

/* user=new User(null,"","","",null,"M","Perdre",null,null,null);
  myForm:FormGroup=new FormGroup({
    "userEmail":new FormControl(null,[Validators.required,Validators.email]),
    "userName":new FormControl(null,[Validators.maxLength(20)]),
    "userPassword":new FormControl(null,[Validators.required,Validators.minLength(8)]),
    "userAge":new FormControl(null,[Validators.required,ValidateDateAge]),
    "userSexe":new FormControl("M"),
    "userObjective":new FormControl("Perdre"),
    "userNiveau":new FormControl(1),
    "userTaille":new FormControl(null,[Validators.required,Validators.min(120),Validators.max(220)]),
    "userPoids":new FormControl(null,[Validators.required,Validators.min(35),Validators.max(120)])
  }); */