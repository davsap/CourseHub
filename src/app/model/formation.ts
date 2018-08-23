export class Formation {
    id: Number;
    titre: string;
    latestUpdate: String;
    image: string;
    description: String;
    constructor( id: Number, titre: string, latestUpdate: String, image: string, description: String) {
      this.id = id;
      this.titre = titre;
      this.latestUpdate = latestUpdate;
      this.image = image;
      this.description = description;
    }
}
