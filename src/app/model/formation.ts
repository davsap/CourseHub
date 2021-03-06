import { User } from "src/app/model/user";

export class Formation {
    id: number;
    titre: string;
    date: string;
    image: string;
    description: String;
    user: User;

    constructor(id: number, titre: string, description: string, date: string, image: string, user: User) {
      this.id = id;
      this.titre = titre;
      this.description = description;
      this.date = date;
      this.image = image;
      this.user = user;
    }

}
