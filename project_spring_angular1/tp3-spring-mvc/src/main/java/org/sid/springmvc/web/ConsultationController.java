package org.sid.springmvc.web;

import java.util.List;

import org.sid.springmvc.entities.Consultation;
import org.sid.springmvc.repositories.ConsultationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ConsultationController {

	@Autowired
	ConsultationRepository consultationRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path="/consultations")
	@ResponseBody
	public List<Consultation> list() {
		return consultationRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping(path="/consultations/{id}")
	public ResponseEntity<Long> delete(@PathVariable Long id) {
		consultationRepository.deleteById(id);
		return new ResponseEntity<>(id, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path="/consultations")
	public ResponseEntity<Long> save(@RequestBody Consultation consultation) {
		consultationRepository.save(consultation);
		return new ResponseEntity<>(consultation.getId(), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/consultations/{id}")
	Consultation one(@PathVariable Long id) {
	    return consultationRepository.findById(id).get();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/consultations/{id}")
	Consultation edit(@RequestBody Consultation consultation, @PathVariable Long id) {
		return consultationRepository.save(consultation);
	}
	
}
