package org.sid.springmvc.web;

import java.util.List;

import org.sid.springmvc.repositories.MedecinRepository;
import org.sid.springmvc.entities.Medecin;
import org.sid.springmvc.entities.RendezVous;
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
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class MedecinController {

	@Autowired
	MedecinRepository medecinRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path="/doctors")
	@ResponseBody
	public List<Medecin> list() {
		return medecinRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path="/doctorsserach")
	public List<Medecin> searchDoctors(@RequestParam(name = "nom") String nom) {
		List<Medecin> l=medecinRepository.searchDoctors(nom);
		return l;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping(path="/doctors/{id}")
	public ResponseEntity<Long> delete(@PathVariable Long id) {
		medecinRepository.deleteById(id);
		return new ResponseEntity<>(id, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path="/doctors")
	public ResponseEntity<Long> save(@RequestBody Medecin medecin) {
		medecinRepository.save(medecin);
		return new ResponseEntity<>(medecin.getId(), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/doctors/{id}")
	Medecin one(@PathVariable Long id) {
	    return medecinRepository.findById(id).get();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/doctors/{id}")
	Medecin edit(@RequestBody Medecin medecin, @PathVariable Long id) {
		return medecinRepository.save(medecin);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/loginDoctor")
	Medecin one(@RequestParam(name = "email") String email, @RequestParam(name = "pswd") String pswd ) {
		Medecin m= medecinRepository.login(email, pswd);
	    return m;
	}
		
}
