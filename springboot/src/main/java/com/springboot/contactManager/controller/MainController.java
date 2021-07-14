package com.springboot.contactManager.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.contactManager.Exception.ResourceNotFoundException;
import com.springboot.contactManager.model.Contact;
import com.springboot.contactManager.repository.ContactsRepository;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1")
public class MainController {
	
	@Autowired
	private ContactsRepository contactRepository;
	
	//get all contacts
	@GetMapping("/contacts")
	public List<Contact> getContacts(){
		return contactRepository.findAll();
	}
	
	//create a contact
	@PostMapping("/contacts")
	public Contact createContact(@RequestBody Contact contact) {
		return contactRepository.save(contact);
	}
	
	//get contact by id
	@GetMapping("/contacts/{id}")
	public ResponseEntity<Contact> getContactById(@PathVariable Long id) {
		Contact contact = contactRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("This Contact doesn't exist!"));
		return ResponseEntity.ok(contact);
	
	}
	
	//update contact
	@PutMapping("/contacts/{id}")
	public ResponseEntity<Contact> updateContactById(@RequestBody Contact newContact, @PathVariable Long id) {
		Contact contact = contactRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("This Contact doesn't exist!"));
		
		contact.setFullName(newContact.getFullName());
		contact.setContactNumber(newContact.getContactNumber());
		contact.setAddress(newContact.getAddress());
		
		Contact updatedContact = contactRepository.save(contact);
		
		return ResponseEntity.ok(updatedContact);
	}
	
	//delete contact
	@DeleteMapping("/contacts/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteContact(@PathVariable Long id) {
		Contact contact = contactRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("This Contact doesn't exist!"));
		
		contactRepository.delete(contact);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	

}
