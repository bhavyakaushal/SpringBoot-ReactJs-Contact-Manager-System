package com.springboot.contactManager.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "Contacts")
public class Contact {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;
	
	@Column(name = "full_name")
	private String fullName;
	
	@Column(name = "contact_number")
	private String contactNumber;
	
	@Column(name = "address")
	private String address;
	
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getFullName() {
		return fullName;
	}
	public void setFullName(String fullName) {
		this.fullName = fullName;
	}
	public String getContactNumber() {
		return contactNumber;
	}
	public void setContactNumber(String contactNumber) {
		this.contactNumber = contactNumber;
	}
	public String getAddress() {
		return address;
	}
	public void setAddress(String address) {
		this.address = address;
	}
	@Override
	public String toString() {
		return "Contact [id=" + id + ", fullName=" + fullName + ", contactNumber=" + contactNumber + ", address="
				+ address + "]";
	}
	public Contact(long id, String fullName, String contactNumber, String address) {
		super();
		this.id = id;
		this.fullName = fullName;
		this.contactNumber = contactNumber;
		this.address = address;
	}
	public Contact() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	
}
