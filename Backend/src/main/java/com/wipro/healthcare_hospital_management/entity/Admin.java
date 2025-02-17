package com.wipro.healthcare_hospital_management.entity;

import java.util.ArrayList;

import java.util.Collection;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinTable;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToMany;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;



@Entity
@Table(name = "admin")
public class Admin {


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	
	@Column(name = "username")
	private String username;
	
	@Column(name = "password")
	private String password;
	
	@Column(name = "role")
	private String role;
	


	@ManyToMany
    @JoinTable(name = "admin_doctor",joinColumns = @JoinColumn(name = "admin_id"),inverseJoinColumns = @JoinColumn(name = "doctor_id"))
	 private Set<Doctor> doctors = new HashSet<>();

    @OneToMany(mappedBy = "admin")
    private List<Patient> patients = new ArrayList<>();
    
    @OneToMany(mappedBy = "admin")
    private List<Appointment> appointments = new ArrayList<>();
    
	public Admin() {
		super();
		
	}



	public Admin(int id, String username, String password, Set<Doctor> doctors, String role) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
	    this.role = role;
	    
		
	}



	public int getId() {
		return id;
	}



	public void setId(int id) {
		this.id = id;
	}



	public String getUsername() {
		return username;
	}



	public void setUsername(String username) {
		this.username = username;
	}



	public String getPassword() {
		return password;
	}



	public void setPassword(String password) {
		this.password = password;
	}



	public String getRole() {
		return role;
	}



	public void setRole(String role) {
		this.role = role;
	}



	
}
