package exemple.siteemp.models;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;


public class OutilsBDD {

	 // JDBC driver name and database URL
	   final String JDBC_DRIVER = "com.mysql.jdbc.Driver";  
	   final static String DB_URL = "jdbc:mysql://localhost:3306/dbgestionemp";

	   //  Database credentials
	   final static String USER = "root";
	   final static String PASS = "root";
	   
	public static ArrayList<Employe> getAllEmploye(){
		
	   ArrayList<Employe> result = new ArrayList<>();
	   Connection conn = null;
	   PreparedStatement stmt = null;
	   
		   try{
		      //STEP 2: Register JDBC driver
		      Class.forName("com.mysql.jdbc.Driver");

		      //STEP 3: Open a connection
		      System.out.println("Connecting to database...");
		      conn = DriverManager.getConnection(DB_URL,USER,PASS);

		      //STEP 4: Execute a query
		      System.out.println("Creating statement...");
		      String sql;
		      sql = "SELECT * FROM employes";
		      stmt = conn.prepareStatement(sql);
		      ResultSet rs = stmt.executeQuery();

		      //STEP 5: Extract data from result set
		      while(rs.next()){
		    	  Employe emp = new Employe(rs.getInt("ID_EMP"), rs.getInt("CODESERVICE"), rs.getString("NOM"), rs.getString("PRENOM"), rs.getDouble("SALAIRE"), rs.getString("VILLE"));
		    	  result.add(emp);
		      }
		      //STEP 6: Clean-up environment
		      rs.close();
		      stmt.close();
		      conn.close();
		   }catch(SQLException se){
		      //Handle errors for JDBC
		      se.printStackTrace();
		   }catch(Exception e){
		      //Handle errors for Class.forName
		      e.printStackTrace();
		   }finally{
		      //finally block used to close resources
		      try{
		         if(stmt!=null)
		            stmt.close();
		      }catch(SQLException se2){
		      }// nothing we can do
		      try{
		         if(conn!=null)
		            conn.close();
		      }catch(SQLException se){
		         se.printStackTrace();
		      }//end finally try
		   }//end try
		   System.out.println("Goodbye!");
		
		return result;
	}
	
	public static ArrayList<Employe> getEmployesFromService(String servSelected) {
		   ArrayList<Employe> result = new ArrayList<>();
		   Connection conn = null;
		   PreparedStatement stmt = null;
		   
			   try{
			      //STEP 2: Register JDBC driver
			      Class.forName("com.mysql.jdbc.Driver");

			      //STEP 3: Open a connection
			      System.out.println("Connecting to database...");
			      conn = DriverManager.getConnection(DB_URL,USER,PASS);

			      //STEP 4: Execute a query
			      System.out.println("Creating statement...");
			      String sql;
			      sql = "SELECT * FROM employes where CODESERVICE = ?";
			      stmt = conn.prepareStatement(sql);
			      stmt.setInt(1, Integer.valueOf(servSelected));
			      ResultSet rs = stmt.executeQuery();

			      //STEP 5: Extract data from result set
			      while(rs.next()){
			    	  Employe emp = new Employe(rs.getInt("ID_EMP"), rs.getInt("CODESERVICE"), rs.getString("NOM"), rs.getString("PRENOM"), rs.getDouble("SALAIRE"), rs.getString("VILLE"));
			    	  result.add(emp);
			      }
			      //STEP 6: Clean-up environment
			      rs.close();
			      stmt.close();
			      conn.close();
			   }catch(SQLException se){
			      //Handle errors for JDBC
			      se.printStackTrace();
			   }catch(Exception e){
			      //Handle errors for Class.forName
			      e.printStackTrace();
			   }finally{
			      //finally block used to close resources
			      try{
			         if(stmt!=null)
			            stmt.close();
			      }catch(SQLException se2){
			      }// nothing we can do
			      try{
			         if(conn!=null)
			            conn.close();
			      }catch(SQLException se){
			         se.printStackTrace();
			      }//end finally try
			   }//end try
			return result;
	}
	
	public static ArrayList<Service> getAllService(){
		
		   ArrayList<Service> result = new ArrayList<>();
		   Connection conn = null;
		   PreparedStatement stmt = null;
		   
			   try{
			      //STEP 2: Register JDBC driver
			      Class.forName("com.mysql.jdbc.Driver");

			      //STEP 3: Open a connection
			      System.out.println("Connecting to database...");
			      conn = DriverManager.getConnection(DB_URL,USER,PASS);

			      //STEP 4: Execute a query
			      System.out.println("Creating statement...");
			      String sql;
			      sql = "SELECT * FROM services";
			      stmt = conn.prepareStatement(sql);
			      ResultSet rs = stmt.executeQuery();

			      //STEP 5: Extract data from result set
			      while(rs.next()){
			    	  Service emp = new Service(rs.getInt("CODESERVICE"), rs.getString("LIBELLE"));
			    	  result.add(emp);
			      }
			      //STEP 6: Clean-up environment
			      rs.close();
			      stmt.close();
			      conn.close();
			   }catch(SQLException se){
			      //Handle errors for JDBC
			      se.printStackTrace();
			   }catch(Exception e){
			      //Handle errors for Class.forName
			      e.printStackTrace();
			   }finally{
			      //finally block used to close resources
			      try{
			         if(stmt!=null)
			            stmt.close();
			      }catch(SQLException se2){
			      }// nothing we can do
			      try{
			         if(conn!=null)
			            conn.close();
			      }catch(SQLException se){
			         se.printStackTrace();
			      }//end finally try
			   }//end try
			
			return result;
		}

	public static boolean addService(Service servToAdd) {
		boolean result = false;
	   Connection conn = null;
	   PreparedStatement stmt = null;
		   
			   try{
			      Class.forName("com.mysql.jdbc.Driver");
			      conn = DriverManager.getConnection(DB_URL,USER,PASS);

			      
			      String sql;
			      sql = "INSERT INTO services (LIBELLE) VALUES (?)";
			      stmt = conn.prepareStatement(sql);
			      stmt.setString(1, servToAdd.getLibelle());
			      int nbInsert = stmt.executeUpdate();
			      
			      result = nbInsert == 1;
			      
			      stmt.close();
			      conn.close();
			   }catch(SQLException se){
			      se.printStackTrace();
			   }catch(Exception e){
			      e.printStackTrace();
			   }finally{
			      try{
			         if(stmt!=null)
			            stmt.close();
			      }catch(SQLException se2){
			      }
			      try{
			         if(conn!=null)
			            conn.close();
			      }catch(SQLException se){
			         se.printStackTrace();
			      }
			   }
			
			return result;
	}
}
