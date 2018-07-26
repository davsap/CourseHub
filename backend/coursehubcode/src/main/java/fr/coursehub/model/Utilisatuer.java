package fr.coursehub.model;

import javax.persistence.Entity;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;

@Entity
@Inheritance(strategy = InheritanceType.SINGLE_TABLE)
public abstract class Utilisatuer  {

    public Utilisatuer(){

    }

    public Utilisatuer(String prenom, String nom, String email, String phoneNumber) {
        this.prenom = prenom;
        this.nom = nom;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }


    protected String prenom;
    protected String nom;
    protected String email;
    protected String phoneNumber;

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
}
