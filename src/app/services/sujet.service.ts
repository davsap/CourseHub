import { Injectable } from '@angular/core';
import {Sujet} from './../model/sujet';


const SUJETMOCK = [
  new Sujet(1, ' Commencez avec Angular'),
  new Sujet(2, 'Construisez une application Angular'),
  new Sujet(3, 'Enrichissez votre application'),
  new Sujet(4, ' Interagissez avec un utilisateur et un serveur')
 ];

  @Injectable({
    providedIn: 'root'
  })
export class SujetService {
  constructor() { }
  getSujet(formationID: number): Sujet[] {
    return SUJETMOCK;
  }
}
