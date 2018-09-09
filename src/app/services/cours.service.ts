import { Injectable } from '@angular/core';
import { Cours} from './../model/cours';

// id: number,  titre: String, description: String,  contenu: String, support: String
const COURSMOCK = [
  new Cours(1, ' Écoutez l\'utilisateur avec les Forms - méthode template',
            'En Angular, il y a deux grandes méthodes pour créer des formulaires',
          '-----', 'support du cours'),
    new Cours(2, ' Écoutez l\'utilisateur avec les Forms - méthode réactive',
            'Pour illustrer la méthode réactive, vous allez créer une nouvelle section',
          '-----', 'support du cours'),
    new Cours(3, 'Interagissez avec un serveur avec HttpClient',
            'Dans une application Angular, vous aurez très souvent besoin de faire des appels à un backend ou à un autre serveur',
          '-----', 'support du cours'),
    new Cours(4, ' Créez une application complète avec Angular et Firebase',
            'Pour cette section, vous allez créer une nouvelle application et' +
             'appliquer des connaissances que vous avez apprises tout au long du cours Angular',
          '-----', 'support du cours')
   ];

@Injectable({
  providedIn: 'root'
})

export class CoursService {
courses: Cours[];
  constructor() { }
  getCoursListBysujet(sujetID) {
    this.courses = COURSMOCK;
  }

  addCours(cours:Cours): void {
    // TODO : Should be implemented
  }

  getCours(id: number): Cours {
    return null;
  }
}
