export class User {
        nom: String;
        prenom: String;
        email: String;
        pseudo: String;
        situation: String;
        password: String;
        ville: String;
        zip: number;
        pays: String;

        public constructor(nom: String, prenom: String, email: String, pseudo: String, situation: String,
            password: String, ville: String, zip: number, pays: String) {
            this.nom = nom;
            this.prenom = prenom;
            this.email = email;
            this.pseudo = pseudo;
            this.situation = situation;
            this.password = password;
            this.ville = ville;
            this.zip = zip;
            this.pays = pays;
        }

}
