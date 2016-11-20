package com.devproserv.timetracking.command;

import javax.servlet.http.HttpServletRequest;

import com.devproserv.timetracking.dao.DaoFactory;
import com.devproserv.timetracking.dao.EmployeeDao;

/**
 * {@code DeleteTimeCommand} removes time tracking row to database
 *
 * @author vovas11
 */
public class DeleteTimeCommand implements Command {

    @Override
    public String executeCommand(HttpServletRequest request) {
        
        /* gets the link to the DaoFactory and EmployeeDao */
        DaoFactory daoFactory = DaoFactory.getInstance();
        EmployeeDao employeeDao = daoFactory.getEmployeeDao();
        
        String idTimeToDeleteStr = request.getParameter("idtime");
        
        int idTimeToDelete = Integer.parseInt(idTimeToDeleteStr);
        
        employeeDao.deleteTime(idTimeToDelete);
        
        String outJson = "{\"status\": \"ok\"}";
        
        return outJson;
    }

}
