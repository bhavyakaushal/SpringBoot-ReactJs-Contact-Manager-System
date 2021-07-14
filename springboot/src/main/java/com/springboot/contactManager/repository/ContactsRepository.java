package com.springboot.contactManager.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.springboot.contactManager.model.Contact;

@Repository
public interface ContactsRepository extends JpaRepository<Contact, Long>{

	
}
