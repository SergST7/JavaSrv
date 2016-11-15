package com.devproserv.timetracking.dao;

/**
 * Represents the entity of the Time Tracking. Maps the table 'timetracking' in the database.
 *
 * @author vovas11
 */
public class TimeTracking {

    /* fields representing columns in the table 'timetracking' */
    private int idTime;
    private int idEmpl;
    private String date;
    private String startTime;
    private String endTime;

    /* getters and setters for the private fields */
    public int getIdTime() {
        return idTime;
    }

    public void setIdTime(int idTime) {
        this.idTime = idTime;
    }

    public int getIdEmpl() {
        return idEmpl;
    }

    public void setIdEmpl(int idEmpl) {
        this.idEmpl = idEmpl;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getStartTime() {
        return startTime;
    }

    public void setStartTime(String startTime) {
        this.startTime = startTime;
    }

    public String getEndTime() {
        return endTime;
    }

    public void setEndTime(String endTime) {
        this.endTime = endTime;
    }
}
