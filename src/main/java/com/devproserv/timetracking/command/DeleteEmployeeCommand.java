package com.devproserv.timetracking.command;

import javax.servlet.http.HttpServletRequest;

import com.devproserv.timetracking.dao.DaoFactory;
import com.devproserv.timetracking.dao.EmployeeDao;

/**
 * {@code DeleteTimeCommand} removes time tracking row to database
 *
 * @author vovas11
 */
public class DeleteEmployeeCommand implements Command {

    @Override
    public String executeCommand(HttpServletRequest request) {
        
        /* gets the link to the DaoFactory and EmployeeDao */
        DaoFactory daoFactory = DaoFactory.getInstance();
        EmployeeDao employeeDao = daoFactory.getEmployeeDao();
        
        String idEmplToDeleteStr = request.getParameter("idempl");
        
        int idEmplToDelete = Integer.parseInt(idEmplToDeleteStr);
        
        employeeDao.deleteEmployee(idEmplToDelete);
        
        String outJson = "{\"status\": \"ok\"}";
        
        return outJson;
    }

}
