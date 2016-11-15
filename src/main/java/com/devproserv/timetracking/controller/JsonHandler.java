package com.devproserv.timetracking.controller;

import com.devproserv.timetracking.command.Command;
import com.devproserv.timetracking.command.CommandFactory;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * Main servlet handling user forms on HTML pages. Gets the link to the CommandFactory
 * and depending on the command from the user form sent in HTTP request hands control
 * over to the corresponding command.
 * 
 * @author vovas11
 * @see CommandFactory
 */
@SuppressWarnings("serial")
public class JsonHandler extends HttpServlet {
    /**
     * Selects a command corresponding to the parameter sent from the user form
     * in HTTP request. Unites the methods doPost and doGet.
     * 
     * @param  request   HTTP request
     * @param  response  HTTP response
     * @throws ServletException
     * @throws IOException
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
	    throws ServletException, IOException {

	/* gets link to the CommandFactory instance or creates one if applies for the first time */
	CommandFactory commandFactory = CommandFactory.getInstance();
	
	/* gets link to the command from the CommandFactory */
	Command command = commandFactory.getCommand(request);
	
	
	String json = command.executeCommand(request);
	
	response.setContentType("application/json");
	response.setCharacterEncoding("UTF-8");
	response.getWriter().write(json);
    }
    
    /**
     * Standard servlet method, 'overridden' by {@code processRequest} method
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
	    throws ServletException, IOException {

	/* call common method for POST and GET methods */
	processRequest(request, response);
    }
    
    /**
     * Standard servlet method, 'overridden' by {@code processRequest} method
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
	    throws ServletException, IOException {
	
	/* call common method for POST and GET methods */
	processRequest(request, response);
    }
}
