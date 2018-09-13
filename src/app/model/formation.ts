export class Formation {
    id: number;
    titre: string;
    date: string;
    image: string;
    description: String;
    userID: number;

    constructor(id: number, titre: string, date: string, image: string, description: string) {
      this.id = id;
      this.titre = titre;
      this.date = date;
      this.image = image;
      this.description = description;
    }

}
