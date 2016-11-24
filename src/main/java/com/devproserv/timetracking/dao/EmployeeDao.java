package com.devproserv.timetracking.dao;

import javax.sql.DataSource;
import java.sql.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Provides methods for communication between application and the database and manipulates
 * with table 'employees'. Part of DAO design pattern.
 *
 * @author vovas11
 * @see DaoFactory
 */
public class EmployeeDao {

    /* link to the connection (interface) to the database */
    DataSource datasrc;

    /* Predefined SQL statements that are used for execution requests in the database, table 'employees' */
    
    
    
    final static String SELECT_DEPS_SQL = "SELECT * FROM department";
    final static String SELECT_EMPLOYEES_FULL_SQL = "SELECT employees.id_empl, "
            + "employees.lastname, employees.firstname, employees.middlename, "
            + "employees.position, employees.sex, employees.contact_info, employees.created_date, "
            + "timetracking.id_time, timetracking.date, timetracking.start_time, timetracking.end_time, "
            + "department.id_dep, department.name, department.description "
            + "FROM timetr.employees "
            + "LEFT JOIN timetr.timetracking ON timetracking.id_empl = employees.id_empl "
            + "JOIN timetr.department ON department.id_dep = employees.id_dep;";
    final static String INSERT_EMPLOYEE_SQL = "INSERT INTO timetr.employees "
            + "(id_dep, lastname, firstname, middlename, position, sex, contact_info, created_date) "
            + "VALUES(?, ?, ?, ?, ?, ?, ?, ?)";
    final static String INSERT_EMPLOYEE_TIME_SQL = "INSERT INTO timetr.timetracking "
            + "(id_empl, date, start_time, end_time) "
            + "VALUES(?, ?, ?, ?)";
    final static String DELETE_EMPLOYEE_TIME_SQL = "DELETE FROM timetr.timetracking "
            + "WHERE id_time=?;";

    //final static String SELECT_USER_SQL = "SELECT * FROM students WHERE login=? AND password=?";
    //final static String SELECT_LOGIN_SQL = "SELECT * FROM students WHERE login=?";

    //final static String GET_USER_FIELDS_SQL = "SELECT student_id, firstname, lastname, department"
    //        + " FROM students WHERE login = ?";

    public EmployeeDao(DataSource datasrc) {
        this.datasrc = datasrc;
    }

    /**
     * Checks if the user with specified login and password exists in the database.
     *
     * @param user the current user
     * @return {@code true} if the user exists and {@code false} if does not
     */
    /*public boolean isExist(User user) {

	*//* link to the current database *//*
        Connection conn = null;

        try {
	    *//* gets connection to the database from Connection pool *//*
            conn = datasrc.getConnection();
	    
	    *//* prepares SQL statement with parameters *//*
            PreparedStatement prepStmt = conn.prepareStatement(SELECT_USER_SQL);
            prepStmt.setString(1, user.getLogin());
            prepStmt.setString(2, user.getPassword());
	    
	    *//* executes the query and receives the result table *//*
            ResultSet result = prepStmt.executeQuery();
	    
	    *//* returns true if result is not empty *//*
            return result.next();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return false;
    }*/

    /**
     * Checks if the user with specified login exists in the database.
     *
     * @param user the current user
     * @return {@code true} if the user exists and {@code false} if does not
     */
    /*public boolean isLoginExist(User user) {
	
	*//* link to the current database *//*
        Connection conn = null;

        try {
	    *//* gets connection to the database from Connection pool *//*
            conn = datasrc.getConnection();
	    
	    *//* prepares SQL statement with parameters *//*
            PreparedStatement prepStmt = conn.prepareStatement(SELECT_LOGIN_SQL);
            prepStmt.setString(1, user.getLogin());
	    
	    *//* executes the query and receives the result table *//*
            ResultSet result = prepStmt.executeQuery();
	    
	    *//* returns true if result is not empty *//*
            return result.next();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return true; // less changes in the database if something is wrong
    }*/
    
    /**
     * Executes request into the database (table 'students') to insert the current user.
     *
     * @param user the current user
     */
    public void insertEmployee(Employee employee) {

        /* link to the current database */
        Connection conn = null;

        try {
            /* gets connection to the database from Connection pool */
            conn = datasrc.getConnection();

            /* prepares SQL statement with parameters */
            PreparedStatement prepStmt = conn.prepareStatement(INSERT_EMPLOYEE_SQL);
            prepStmt.setInt(1, employee.getIdDep());
            prepStmt.setString(2, employee.getLastName());
            prepStmt.setString(3, employee.getFirstName());
            prepStmt.setString(4, employee.getMiddleName());
            prepStmt.setString(5, employee.getPosition());
            prepStmt.setString(6, employee.getSex());
            prepStmt.setString(7, employee.getContactInfo());
            prepStmt.setDate(8, employee.getCreatedDate());

            /* executes the query without returning anything */
            prepStmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * Executes request into the database (table 'students') to insert the current user.
     *
     * @param user the current user
     */
    public void insertTime(TimeTracking time) {

        /* link to the current database */
        Connection conn = null;

        try {
            /* gets connection to the database from Connection pool */
            conn = datasrc.getConnection();

            /* prepares SQL statement with parameters */
            PreparedStatement prepStmt = conn.prepareStatement(INSERT_EMPLOYEE_TIME_SQL);
            prepStmt.setInt(1, time.getIdEmpl());
            prepStmt.setDate(2, time.getDate());
            prepStmt.setTime(3, time.getStartTime());
            prepStmt.setTime(4, time.getEndTime());

            /* executes the query without returning anything */
            prepStmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }
    
    /**
     * Executes request into the database (table 'students') to insert the current user.
     *
     * @param user the current user
     */
    public void deleteTime(int idTime) {
        /* link to the current database */
        Connection conn = null;

        try {
            /* gets connection to the database from Connection pool */
            conn = datasrc.getConnection();

            /* prepares SQL statement with parameters */
            PreparedStatement prepStmt = conn.prepareStatement(DELETE_EMPLOYEE_TIME_SQL);
            prepStmt.setInt(1, idTime);

            /* executes the query without returning anything */
            prepStmt.execute();
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }

    /**
     * Executes request into the database and returns list of all employees
     *
     * @return list of all employees from the database
     */
    public List<EmployeeFullInfo> getAllEmployeesFullInfo() {
        
        /* list of items to be returned */
        List<EmployeeFullInfo> allEmployeesWithTime = new ArrayList<>();
        
        /* link to the current database */
        Connection conn = null;
        try {
            /* gets connection to the database from Connection pool */
            conn = datasrc.getConnection();
            
            /* creates simple SQL statement */
            Statement stmt = conn.createStatement();
            
            /* executes the query and receives the result table */
            ResultSet result = stmt.executeQuery(SELECT_EMPLOYEES_FULL_SQL);
            
            /* runs through all rows of the result table, creates an instance of the EmployeeFullInfo,
             * fills in the instance's fields, and put it into result list */
            while (result.next()) {
                EmployeeFullInfo employee = new EmployeeFullInfo();
                employee.setIdEmpl(result.getInt(1));
                employee.setLastName(result.getString(2));
                employee.setFirstName(result.getString(3));
                employee.setMiddleName(result.getString(4));
                employee.setPosition(result.getString(5));
                employee.setSex(result.getString(6));
                employee.setContactInfo(result.getString(7));
                employee.setCreatedDate(result.getDate(8));
                employee.setIdTime(result.getInt(9));
                employee.setTimeTrackDate(result.getDate(10));
                employee.setStartTime(result.getTime(11));
                employee.setEndTime(result.getTime(12));
                employee.setIdDep(result.getInt(13));
                employee.setDepName(result.getString(14));
                employee.setDepDescr(result.getString(15));

                allEmployeesWithTime.add(employee);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return allEmployeesWithTime;
    }
    
    public List<Department> getDeps() {
        /* list of items to be returned */
        List<Department> deps = new ArrayList<>();
        
        /* link to the current database */
        Connection conn = null;
        try {
            /* gets connection to the database from Connection pool */
            conn = datasrc.getConnection();
            
            /* creates simple SQL statement */
            Statement stmt = conn.createStatement();
            
            /* executes the query and receives the result table */
            ResultSet result = stmt.executeQuery(SELECT_DEPS_SQL);
            
            /* runs through all rows of the result table, creates an instance of the Department,
             * fills in the instance's fields, and put it into result list */
            while (result.next()) {
                Department dep = new Department();
                dep.setIdDep(result.getInt(1));
                dep.setName(result.getString(2));
                dep.setDescription(result.getString(3));

                deps.add(dep);
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                conn.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
        return deps;
    }
    

    /**
     * Adds rest of the fields into the object.
     *
     * @param user the current user
     */
    /*public void getFieldsForUser(User user) {
	
	*//* link to the current database *//*
        Connection connection = null;

        try {
	    *//* gets connection to the database from Connection pool *//*
            connection = datasrc.getConnection();
	    
	    *//* prepares SQL statement with parameters *//*
            PreparedStatement prepStmt = connection.prepareStatement(GET_USER_FIELDS_SQL);
            prepStmt.setString(1, user.getLogin());
	    
	    *//* executes the query and receives the result table *//*
            ResultSet result = prepStmt.executeQuery();
	    
	    *//* fills in the instance's fields *//*
            while (result.next()) {
                user.setId(result.getInt(1));
                user.setFirstName(result.getString(2));
                user.setLastName(result.getString(3));
                user.setDepartment(result.getString(4));
            }
        } catch (SQLException e) {
            e.printStackTrace();
        } finally {
            try {
                connection.close();
            } catch (SQLException e) {
                e.printStackTrace();
            }
        }
    }*/
}
