package fr.coursehub.model;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "Etudiant")
public class Etudiant extends Utilisatuer {

    public Etudiant() {
    }

    public Etudiant(String prenom, String nom, String email, String phoneNumber) {
        super(prenom, nom, email, phoneNumber);
    }

}
