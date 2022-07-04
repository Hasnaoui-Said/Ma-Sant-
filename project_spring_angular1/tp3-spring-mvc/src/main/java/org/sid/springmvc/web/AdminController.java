package org.sid.springmvc.web;

import org.sid.springmvc.entities.Admin;
import org.sid.springmvc.entities.Medecin;
import org.sid.springmvc.repositories.AdminRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

	@Autowired
	AdminRepository adminRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/admin")
	Admin one(@RequestParam(name = "email") String email, @RequestParam(name = "pswd") String pswd ) {
	    Admin a = adminRepository.login(email, pswd);
	    return a;
	}
	
}
