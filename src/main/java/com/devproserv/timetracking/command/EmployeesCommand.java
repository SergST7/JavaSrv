package com.devproserv.timetracking.command;


import com.devproserv.timetracking.dao.DaoFactory;
import com.devproserv.timetracking.dao.Employee;
import com.devproserv.timetracking.dao.EmployeeDao;
import com.google.gson.Gson;

import javax.servlet.http.HttpServletRequest;
import java.util.List;

/**
 * {@code LoginCommand} handles access for the existing user
 *
 * @author vovas11
 */
public class EmployeesCommand implements Command {
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

        List<Employee> employees = employeeDao.getAllEmployees();

        String json = new Gson().toJson(employees);

        return json;
    }
}
