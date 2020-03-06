package exemple.siteemp.servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import exemple.siteemp.models.Employe;
import exemple.siteemp.models.OutilsBDD;
import exemple.siteemp.models.Service;

/**
 * Servlet implementation class AccueilServlet
 */
@WebServlet("/AccueilServlet")
public class AccueilServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AccueilServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		

		ArrayList<Service> services = OutilsBDD.getAllService();
		request.setAttribute("services", services);
		
		String servSelected = request.getParameter("servSelected");
		
		ArrayList<Employe> employes;
		if(servSelected != null) {
			employes = OutilsBDD.getEmployesFromService(servSelected);
		}else {
			employes = OutilsBDD.getAllEmploye();
		}
		
		request.setAttribute("employes", employes);
		
		request.getRequestDispatcher("/WEB-INF/Acceuil.jsp").forward(request, response);
	
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		// TODO Auto-generated method stub
		doGet(request, response);
	}

}
