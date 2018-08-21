package fr.coursehub.model;

import javax.persistence.*;

@Entity
@Inheritance(strategy = InheritanceType.JOINED)
@Table(name = "Utilisateur")
public abstract class Utilisatuer  {

    public Utilisatuer(){

    }

    public Utilisatuer(String prenom, String nom, String email, String phoneNumber) {
        this.prenom = prenom;
        this.nom = nom;
        this.email = email;
        this.phoneNumber = phoneNumber;
    }


    @Id
    @Column(name = "ID")
    @GeneratedValue
    protected Integer ID;

    protected String prenom;
    protected String nom;
    protected String email;
    protected String phoneNumber;

    public Integer getID() {
        return ID;
    }

    public void setID(Integer ID) {
        this.ID = ID;
    }

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
