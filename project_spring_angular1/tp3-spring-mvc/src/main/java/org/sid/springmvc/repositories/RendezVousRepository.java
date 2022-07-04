package org.sid.springmvc.repositories;

import java.util.Date;
import java.util.List;

import org.sid.springmvc.entities.Patient;
import org.sid.springmvc.entities.RendezVous;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface RendezVousRepository extends JpaRepository<RendezVous, Long> {

	@Query("SELECT r FROM RendezVous r WHERE r.PatientId=?1")
	public List<RendezVous> rendezVousPatient(Long id);

	@Query("SELECT r FROM RendezVous r WHERE r.DoctorId=?1")
	public List<RendezVous> rendezVousDoctor(Long id);

	@Query("SELECT r FROM RendezVous r WHERE r.date=?1")
	public List<RendezVous> searchRendezVous(Date date);
	
}
