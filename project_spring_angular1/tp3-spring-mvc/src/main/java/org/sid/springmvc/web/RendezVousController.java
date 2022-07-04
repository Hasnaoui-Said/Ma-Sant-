package org.sid.springmvc.web;

import java.util.Date;
import java.util.List;

import org.sid.springmvc.entities.Medecin;
import org.sid.springmvc.entities.RendezVous;
import org.sid.springmvc.repositories.RendezVousRepository;
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
public class RendezVousController {

	@Autowired
	RendezVousRepository rendezVousRepository;
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path="/rendezVous")
	@ResponseBody
	public List<RendezVous> list() {
		return rendezVousRepository.findAll();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path="/rendezVousSerach")
	public List<RendezVous> searchRendezVous(@RequestParam(name = "date") Date date) {
		List<RendezVous> l=rendezVousRepository.searchRendezVous(date);
		return l;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path="/rendezVousPatient/{id}")
	public List<RendezVous> rendezVousPatient(@PathVariable Long id) {
		List<RendezVous> l=rendezVousRepository.rendezVousPatient(id);
		return l;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping(path="/rendezVousDoctor/{id}")
	public List<RendezVous> rendezVousDoctor(@PathVariable Long id) {
		List<RendezVous> l=rendezVousRepository.rendezVousDoctor(id);
		return l;
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@DeleteMapping(path="/rendezVous/{id}")
	public ResponseEntity<Long> delete(@PathVariable Long id) {
		rendezVousRepository.deleteById(id);
		return new ResponseEntity<>(id, HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping(path="/rendezVous")
	public ResponseEntity<Long> save(@RequestBody RendezVous rendezVous) {
		rendezVousRepository.save(rendezVous);
		return new ResponseEntity<>(rendezVous.getId(), HttpStatus.OK);
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@GetMapping("/rendezVous/{id}")
	RendezVous one(@PathVariable Long id) {
	    return rendezVousRepository.findById(id).get();
	}
	
	@CrossOrigin(origins = "http://localhost:4200")
	@PutMapping("/rendezVous/{id}")
	RendezVous edit(@RequestBody RendezVous rendezVous, @PathVariable Long id) {
		return rendezVousRepository.save(rendezVous);
	}
	
}
