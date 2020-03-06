package exemple.siteemp.servlets;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

/**
 * Servlet implementation class LoginServlet
 */
@WebServlet("/LoginServlet")
public class LoginServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;
       
    /**
     * @see HttpServlet#HttpServlet()
     */
    public LoginServlet() {
        super();
        // TODO Auto-generated constructor stub
    }

	/**
	 * @see HttpServlet#doGet(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		Cookie[] cookies = request.getCookies();
		for(Cookie cookie : cookies) {
			if(cookie.getName().equals("cookLogin")) {
				request.setAttribute("loginCookie", cookie.getValue());
			}
		}
		request.getRequestDispatcher("/WEB-INF/login.jsp").forward(request, response);
	}

	/**
	 * @see HttpServlet#doPost(HttpServletRequest request, HttpServletResponse response)
	 */
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		String login,mdp;
		
		login = request.getParameter("txtlogin");
		mdp = request.getParameter("txtmdp");
		
		System.out.println(request.getParameter("souvenirlogin"));
		
		if(login.equals("u@u.fr") && mdp.equals("u")) {
			request.setAttribute("msg", "Authentification ok");
			HttpSession session = request.getSession();
			session.setAttribute("sessInfo", "Steeve Assous");
			
			if(request.getParameter("souvenirlogin") != null) {
				Cookie cook = new Cookie("cookLogin","u@u.fr");
				cook.setMaxAge(60*60*24*7);
				response.addCookie(cook);
			}
			
		}else {
			request.setAttribute("msg", "Authentification invalide");
		}
		
		doGet(request, response);
		
	}

}
