export class Cours {
    id: number;
    titre: String;
    description: String;
    contenu: String;
    support: String;

    constructor(id: number,  titre: String, description: String,  contenu: String, support: String) {
        this.id = id;
        this.titre = titre;
    }

}
