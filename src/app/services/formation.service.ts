import { Injectable } from '@angular/core';
import {Formation} from './../model/formation';



const MOCKFORMATION =
[new Formation(1,
  'Programmation Web FrontEnd',
 '21/08/2018', './assets/images/',
'Vous souhaitez créer vos propres sites web ? Vous êtes au bon endroit ! Dans ce cours,'),
new Formation(2,
   'Utilisez des API REST dans vos projets web',
   '21/08/2018',    './assets/images/',
'Dans ce cours, nous allons découvrir la puissance des API (Application Programming Interfaces) pour créer des applications plus riches'),
new Formation(3,
  'Surveillez la performance de votre application PHP', '22/08/2018',
'./assets/images/', 'Qu\'est-ce qos applications ?'),
new Formation(4,
  'Découvrez les calculs de paie et comment les contrôler',
'22/08/2018', './assets/images/', 'Vous trouvez que le cycle de paie e complexe,$e?'),
new Formation(5,
  'Optimisez votre architecture Microservices',
   '22/08/2018', './assets/images/',
   'Vous avez développé vos Microservices et votre application est fonctionnelle. Bravo !... Mais plusieurse :'),
new Formation(6,
  'Construisez votre projet professionnel',
   '22/08/2018', './assets/images/',
   'Vous souhaitez démarrer une formation, changer de métier, trouver un emploi... Bref '),
new Formation(7,
  'Développez votre personal branding',
   '22/08/2018', './assets/images/',
   'Vous souhaitez démarrer une formation, changer de métier, trouver un emploi... Bref '),
new Formation(8,
  'Aléatoire : une introduction aux probabilités',
   '22/08/2018', './assets/images/',
   'Le cours introduit graduellement la notion de variable aléatoire a loi des grands nombres et le théorème de la limite centrale'),
new Formation(9,
  'Introduction à la théorie de Galois',
  '20/08/2018', './assets/images/', 'Le cours expose la théorie de Galois,  '),
new Formation(10,
  'Réussir le Changement',
   '22/08/2018', './assets/images/',
  ' L\'accélération de l\'environnement socio-économique  multiplier les projets de changement (nouveaux produits, applications  etc.)'),
new Formation(11, 'Introduction aux droits de l’homme',
 '22/08/2018', './assets/images/',
 'Ce cours propose une introduction à la proces, les catégories, le contenu et les limites qui leur sont opposables'),
new Formation(12,
  'Comment rédiger et publier un article scientifique (Enseignement par projet)',
   '22/08/2018', './assets/images/',
   'A l’issue de ce cours, vous serez capable de :- de comprendre le contexte et les règles de publication scientifique'),

];

@Injectable({
  providedIn: 'root'
})

export class FormationService {

  constructor() { }
}
