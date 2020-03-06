package exemple.siteemp.models;

public class Employe {
	
	 private int matricule;
	 private int numService;
	 private String nom;
	 private String prenom;
	 private double salaire;
	 private String ville;
		 
	public Employe() {
		 
	}
	 
	public Employe(int matricule, int numService, String nom, String prenom, double salaire, String ville) {
		super();
		this.matricule = matricule;
		this.numService = numService;
		this.nom = nom;
		this.prenom = prenom;
		this.salaire = salaire;
		this.ville = ville;
	}
	
	public int getMatricule() {
		return matricule;
	}
	public void setMatricule(int matricule) {
		this.matricule = matricule;
	}
	public int getNumService() {
		return numService;
	}
	public void setNumService(int numService) {
		this.numService = numService;
	}
	public String getNom() {
		return nom.toUpperCase();
	}
	public void setNom(String nom) {
		this.nom = nom;
	}
	public String getPrenom() {
		return prenom;
	}
	public void setPrenom(String prenom) {
		this.prenom = prenom;
	}
	public double getSalaire() {
		return salaire;
	}
	public void setSalaire(double salaire) {
		this.salaire = salaire;
	}
	public String getVille() {
		return ville;
	}
	public void setVille(String ville) {
		this.ville = ville;
	}

	@Override
	public String toString() {
		return "Employe [matricule=" + matricule + ", numService=" + numService + ", nom=" + nom + ", prenom=" + prenom
				+ ", Salaire=" + salaire + ", ville=" + ville + "]";
	}
 
}
