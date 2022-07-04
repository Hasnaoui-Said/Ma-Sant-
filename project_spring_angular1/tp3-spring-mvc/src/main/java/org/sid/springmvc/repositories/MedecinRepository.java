package org.sid.springmvc.repositories;

import java.util.List;

import org.sid.springmvc.entities.Medecin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface MedecinRepository extends JpaRepository<Medecin, Long> {

	@Query("SELECT m FROM Medecin m WHERE m.email=?1 and m.pswd=?2")
	public Medecin login(String email, String psw);
	
	@Query("SELECT m FROM Medecin m WHERE m.nom like %?1%")
	public List<Medecin> searchDoctors(String nom);
	
}
