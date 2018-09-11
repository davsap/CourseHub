import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from '../../model/user';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm = new FormGroup({
    'identifiant': new FormControl(),
    'password': new FormControl()
  });
user: User;
  constructor(private fb: FormBuilder, private service: UserService) { }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit(): void {
  this.loginForm = this.fb.group({
      identifiant: [null , [Validators.required, Validators.minLength(1)]],
      password: [null , [Validators.required, Validators.minLength(1)]]
    });
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn('Formulaire soumis : ' + this.loginForm.value);
    this.user = new User (null, null, null, this.loginForm.get('identifiant').value, null,
    this.loginForm.get('password').value, null, null, null);
    this.service.logUser(this.user);
  }

  get identifiant() {
    return this.loginForm.get('identifiant');
  }
  get password() {
    return this.loginForm.get('password');
  }

}
