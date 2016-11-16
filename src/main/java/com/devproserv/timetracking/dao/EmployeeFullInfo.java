package com.devproserv.timetracking.dao;

import java.sql.Time;
import java.sql.Date;

/**
 * Represents the all entities assembled in one object.
 *
 * @author vovas11
 */
public class EmployeeFullInfo {

    /* fields representing columns in the table 'employees' */
    private int idEmpl;
    private String lastName;
    private String firstName;
    private String middleName;
    private String position;
    private String sex;
    private String contactInfo;
    private Date createdDate;
    private int idTime;
    private Date timeTrackDate;
    private Time startTime;
    private Time endTime;
    private int idDep;
    private String depName;
    private String depDescr;
    
    /* getters and setters for the private fields */
    public int getIdEmpl() {
        return idEmpl;
    }
    public void setIdEmpl(int idEmpl) {
        this.idEmpl = idEmpl;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String lastName) {
        this.lastName = lastName;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }
    public String getMiddleName() {
        return middleName;
    }
    public void setMiddleName(String middleName) {
        this.middleName = middleName;
    }
    public String getPosition() {
        return position;
    }
    public void setPosition(String position) {
        this.position = position;
    }
    public String getSex() {
        return sex;
    }
    public void setSex(String sex) {
        this.sex = sex;
    }
    public String getContactInfo() {
        return contactInfo;
    }
    public void setContactInfo(String contactInfo) {
        this.contactInfo = contactInfo;
    }
    public Date getCreatedDate() {
        return createdDate;
    }
    public void setCreatedDate(Date createdDate) {
        this.createdDate = createdDate;
    }
    public int getIdTime() {
        return idTime;
    }
    public void setIdTime(int idTime) {
        this.idTime = idTime;
    }
    public Date getTimeTrackDate() {
        return timeTrackDate;
    }
    public void setTimeTrackDate(Date timeTrackDate) {
        this.timeTrackDate = timeTrackDate;
    }
    public Time getStartTime() {
        return startTime;
    }
    public void setStartTime(Time startDate) {
        this.startTime = startDate;
    }
    public Time getEndTime() {
        return endTime;
    }
    public void setEndTime(Time endDate) {
        this.endTime = endDate;
    }
    public int getIdDep() {
        return idDep;
    }
    public void setIdDep(int idDep) {
        this.idDep = idDep;
    }
    public String getDepName() {
        return depName;
    }
    public void setDepName(String depName) {
        this.depName = depName;
    }
    public String getDepDescr() {
        return depDescr;
    }
    public void setDepDescr(String depDescr) {
        this.depDescr = depDescr;
    }

}
