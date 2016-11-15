package com.devproserv.timetracking.dao;

/**
 * Represents the entity of the Departament. Maps the table 'departament' in the database.
 *
 * @author vovas11
 */
public class Department {

    /* fields representing columns in the table 'departament' */
    private int idDep;
    private String name;
    private String description;

    /* getters and setters for the private fields */
    public int getIdDep() {
        return idDep;
    }

    public void setIdDep(int idDep) {
        this.idDep = idDep;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
