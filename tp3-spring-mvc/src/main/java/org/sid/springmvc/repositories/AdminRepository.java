package org.sid.springmvc.repositories;

import org.sid.springmvc.entities.Admin;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AdminRepository extends JpaRepository<Admin, Long> {
	
	@Query("SELECT a FROM Admin a WHERE a.email=?1 and a.pswd=?2")
	public Admin login(String email, String psw);
	
}
