package com.khalil.bankapi.User;


import java.util.Date;
import javax.persistence.*;

import javax.persistence.Table;
@Entity
@Table(name = "users")
public class User {
     @Id
    private Long id;
    @Column(name="firstname")
    private String firstName;
    @Column(name="secondname")
    private String secondName;
    @Column(name="phonenumber")
    private String phoneNumber;
    @Column(name="adresses")
    private String adresses;
    @Column(name="dateofbirth")
    private Date dateOfBirth;
    @Column(name="picture", length=20000)
    private String picture;
  
    public User(){}
      public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getSecondName() {
        return secondName;
    }
    public void setSecondName(String secondName) {
        this.secondName = secondName;
    }
    public String getPhoneNumber() {
        return phoneNumber;
    }
    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }
    public String getAdresses() {
        return adresses;
    }
    public void setAdresses(String adresses) {
        this.adresses = adresses;
    }
    public Date getDateOfBirth() {
        return dateOfBirth;
    }
    public void setDateOfBirth(Date dateOfBirth) {
        this.dateOfBirth = dateOfBirth;
    }
    public  String getPicture() {
        return picture;
    }
    public void setPicture( String picture) {
        this.picture = picture;
    }
    public User( String firstName, String secondName, String phoneNumber, String adresses, Date dateOfBirth,
            String picture) {
        this.firstName = firstName;
        this.secondName = secondName;
        this.phoneNumber = phoneNumber;
        this.adresses = adresses;
        this.dateOfBirth = dateOfBirth;
        this.picture = picture;
    }



    
}
