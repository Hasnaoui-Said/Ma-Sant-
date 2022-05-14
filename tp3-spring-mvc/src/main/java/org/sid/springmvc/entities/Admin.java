package org.sid.springmvc.entities;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data @NoArgsConstructor @AllArgsConstructor @ToString
public class Admin {

	@Id @GeneratedValue(strategy=GenerationType.IDENTITY)
	private Long id;
	private String email;
	private String pswd;
	
}
