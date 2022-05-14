package service;

import org.sid.springmvc.entities.Consultation;
import org.sid.springmvc.entities.Medecin;
import org.sid.springmvc.entities.Patient;
import org.sid.springmvc.entities.RendezVous;

public interface IHospitalService {

	Patient savePatient(Patient patinet);
	Medecin saveMedecin(Medecin medecin);
	RendezVous saveRendezVous(RendezVous rendezVous);
	Consultation saveConsultation(Consultation consultation);
	
}
