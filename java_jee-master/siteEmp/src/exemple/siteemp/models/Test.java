package exemple.siteemp.models;

import java.util.ArrayList;

public class Test {

	public static void main(String[] args) {
		
		OutilsBDD outil = new OutilsBDD();
		ArrayList<Employe> result = outil.getAllEmploye();
		
		for(Employe emp : result) {
			System.out.println(emp);
		}

	}

}
