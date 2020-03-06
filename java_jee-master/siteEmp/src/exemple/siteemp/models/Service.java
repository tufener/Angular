package exemple.siteemp.models;

import java.util.ArrayList;

public class Service {

	private int code;
	private String libelle;
	private ArrayList<String> errors = new ArrayList<>();
	
	public Service(int code, String libelle) {
		super();
		this.code = code;
		this.setLibelle(libelle);
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getLibelle() {
		return libelle;
	}
	public void setLibelle(String libelle) {
		if(libelle.length() > 30) {
			errors.add("libellé trop long !");
		}
		this.libelle = libelle;
	}
	
	public ArrayList<String> getErrors() {
		return errors;
	}
	public boolean isValid() {
		return errors.size() == 0; 
	}
		
}
