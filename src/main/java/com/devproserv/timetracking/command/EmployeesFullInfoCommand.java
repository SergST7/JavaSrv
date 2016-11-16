package com.devproserv.timetracking.command;


import com.devproserv.timetracking.dao.DaoFactory;
import com.devproserv.timetracking.dao.EmployeeDao;
import com.devproserv.timetracking.dao.EmployeeFullInfo;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * {@code EmployeesFullInfoCommand} handles access for the existing user
 *
 * @author vovas11
 */
public class EmployeesFullInfoCommand implements Command {
    /**
     * Defines if the name and password of the user exists in the database and if yes,
     * returns the page for the user. If not, returns the starting page
     *
     * @param request HTTP request
     * @return the the name of the page the server returns to the client
     */
    @Override
    public String executeCommand(HttpServletRequest request) {

        /* gets the link to the DaoFactory and UserDao and CourseDao */
        DaoFactory daoFactory = DaoFactory.getInstance();
        EmployeeDao employeeDao = daoFactory.getEmployeeDao();

        /* creates new user and sets the fields received from the user form via HTTP request */

        List<EmployeeFullInfo> employees = employeeDao.getAllEmployeesFullInfo();
        
        Gson gson = new GsonBuilder().serializeNulls().create();
        String json = gson.toJson(employees);
        
        return json;
    }
}
