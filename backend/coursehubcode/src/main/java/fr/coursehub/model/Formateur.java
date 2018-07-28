package fr.coursehub.model;

import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Table(name = "Formateur")
public class Formateur extends Utilisatuer{

    public Formateur(){}

    public Formateur(String prenom, String nom, String email, String phoneNumber) {
        super(prenom, nom, email, phoneNumber);
    }

}
