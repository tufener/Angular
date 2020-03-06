package exemple.siteemp.servlets;

import java.io.IOException;
import java.util.ArrayList;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import exemple.siteemp.models.OutilsBDD;
import exemple.siteemp.models.Service;

/**
 * Servlet implementation class AjoutServiceServlet
 */
@WebServlet("/AjoutServiceServlet")
public class AjoutServiceServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public AjoutServiceServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.getRequestDispatcher("/WEB-INF/ajoutService.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		if(!request.getParameter("txtlib").equals("")) {
			Service service = new Service(0,request.getParameter("txtlib"));
			if(service.isValid()) {
				System.out.println("insert service en bdd");
				boolean resultInsert = OutilsBDD.addService(service);
				if (resultInsert != true) {
					ArrayList<String> string = service.getErrors();
					string.add("Insertion Impossible");
					request.setAttribute("errors",string );
					doGet(request, response);
				}else {
					//request.setAttribute("msg","Ajout du service éffectué" );
					response.sendRedirect("/siteEmp");
				}
				

			}else {
				System.out.println("erreurs detecté sur l'objet");
				request.setAttribute("errors", service.getErrors());
				doGet(request, response);
			}
			
		}else {
			doGet(request, response);
		}
		
	}

}
