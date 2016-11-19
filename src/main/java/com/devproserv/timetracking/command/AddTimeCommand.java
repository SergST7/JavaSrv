package com.devproserv.timetracking.command;


import com.devproserv.timetracking.dao.DaoFactory;
import com.devproserv.timetracking.dao.EmployeeDao;
import com.devproserv.timetracking.dao.TimeTracking;
import com.devproserv.timetracking.utilities.DateDeserializer;
import com.devproserv.timetracking.utilities.TimeDeserializer;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import java.io.BufferedReader;
import java.io.IOException;
import java.sql.Date;
import java.sql.Time;

import javax.servlet.http.HttpServletRequest;

/**
 * {@code AddTimeCommand} adds new time tracking row to database
 *
 * @author vovas11
 */
public class AddTimeCommand implements Command {
    /**
     * Defines if the name and password of the user exists in the database and if yes,
     * returns the page for the user. If not, returns the starting page
     *
     * @param request HTTP request
     * @return the the name of the page the server returns to the client
     */
    @Override
    public String executeCommand(HttpServletRequest request) {

        /* gets the link to the DaoFactory and EmployeeDao */
        DaoFactory daoFactory = DaoFactory.getInstance();
        EmployeeDao employeeDao = daoFactory.getEmployeeDao();
        
        /* reads json from request */
        BufferedReader bf = null;
        StringBuffer sb = new StringBuffer();
        
        try {
            bf = request.getReader();
            String lineInBuffer = "";
            while ((lineInBuffer = bf.readLine()) != null) {
                sb.append(lineInBuffer);
            }
        } catch (IOException e) {
            e.printStackTrace();
            return "error";
        }
        
        String inJson = sb.toString();
        
        GsonBuilder gsonBuilder = new GsonBuilder()
                .registerTypeAdapter(Date.class, new DateDeserializer())
                .registerTypeAdapter(Time.class, new TimeDeserializer());
        
        Gson gson = gsonBuilder.create();
        
        TimeTracking timeFromJson = gson.fromJson(inJson, TimeTracking.class);
        
        employeeDao.insertTime(timeFromJson);
        
        String outJson = "{\"status\": \"ok\"}";
        
        return outJson;
    }
}
