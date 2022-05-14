package org.sid.springmvc.web;

import org.sid.springmvc.entities.Patient;
import org.sid.springmvc.repositories.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class PatientController {

	@Autowired
	PatientRepository patientRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path="/patientDoctors")
	public ResponseEntity<Long> save(@RequestBody Patient patient) {
		patientRepository.save(patient);
		return new ResponseEntity<>(patient.getId(), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/patientDoctors/{id}")
	Patient one(@PathVariable Long id) {
	    return patientRepository.findById(id).get();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/patientDoctors/{id}")
	Patient edit(@RequestBody Patient patient, @PathVariable Long id) {
		return patientRepository.save(patient);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/loginPatient")
	Patient one(@RequestParam(name = "email") String email, @RequestParam(name = "pswd") String pswd ) {
		Patient p= patientRepository.login(email, pswd);
	    return p;
	}
	
}
