package org.sid.springmvc.repositories;

import org.sid.springmvc.entities.Patient;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PatientRepository extends JpaRepository<Patient, Long> {

	@Query("SELECT p FROM Patient p WHERE p.email=?1 and p.pswd=?2")
	public Patient login(String email, String psw);

}
