package com.devproserv.timetracking.dao;

import javax.naming.InitialContext;
import javax.naming.NamingException;
import javax.sql.DataSource;

/**
 * {@code DaoFactory} is a factory (design pattern) that creates instances
 * of the data access objects (DAO).
 *
 * @author vovas11
 */
public class DaoFactory {

    /* stores the link to the single instance (Singleton) */
    static DaoFactory factory = new DaoFactory();

    /* stores the link to the common data source */
    DataSource datasrc;

    /* forbids the instantiation of the class outside and receives the link to datasource
     * by Initial Context */
    private DaoFactory() {
        try {
            InitialContext initContext = new InitialContext();
            datasrc = (DataSource) initContext.lookup("java:comp/env/jdbc/timetr");
        } catch (NamingException e) {
            e.printStackTrace();
        }
    }

    /**
     * Returns to the link to single instance of the DaoFactory class
     *
     * @return link to single instance of the class
     */
    public static DaoFactory getInstance() {
        return factory;
    }

    /**
     * Creates the instance of the EmployeeDao class and returns the link
     *
     * @return link to the instance of EmployeeDao
     */
    public EmployeeDao getEmployeeDao() {
        return new EmployeeDao(datasrc);
    }
}
