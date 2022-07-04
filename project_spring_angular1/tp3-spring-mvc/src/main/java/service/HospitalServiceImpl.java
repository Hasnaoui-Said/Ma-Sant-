package service;

import javax.transaction.Transactional;

import org.sid.springmvc.entities.Consultation;
import org.sid.springmvc.entities.Medecin;
import org.sid.springmvc.entities.Patient;
import org.sid.springmvc.entities.RendezVous;
import org.sid.springmvc.repositories.ConsultationRepository;
import org.sid.springmvc.repositories.MedecinRepository;
import org.sid.springmvc.repositories.PatientRepository;
import org.sid.springmvc.repositories.RendezVousRepository;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class HospitalServiceImpl implements IHospitalService {
	
	private PatientRepository patientRepository;
	private MedecinRepository medecinRepository;
	private RendezVousRepository rendezVousRepository;
	private ConsultationRepository consultationRepository;
	
	public HospitalServiceImpl(PatientRepository patientRepository, MedecinRepository medecinRepository,
			RendezVousRepository rendezVousRepository, ConsultationRepository consultationRepository) {
		this.patientRepository = patientRepository;
		this.medecinRepository = medecinRepository;
		this.rendezVousRepository = rendezVousRepository;
		this.consultationRepository = consultationRepository;
	}

	@Override
	public Patient savePatient(Patient patinet) {
		return patientRepository.save(patinet);
	}

	@Override
	public Medecin saveMedecin(Medecin medecin) {
		return medecinRepository.save(medecin);
	}

	@Override
	public RendezVous saveRendezVous(RendezVous rendezVous) {
		return rendezVousRepository.save(rendezVous);
	}

	@Override
	public Consultation saveConsultation(Consultation consultation) {
		return consultationRepository.save(consultation);
	}
	
}
