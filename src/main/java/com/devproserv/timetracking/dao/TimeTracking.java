package com.devproserv.timetracking.dao;

import java.sql.Date;
import java.sql.Time;

/**
 * Represents the entity of the Time Tracking. Maps the table 'timetracking' in the database.
 *
 * @author vovas11
 */
public class TimeTracking {

    /* fields representing columns in the table 'timetracking' */
    private int idTime;
    private int idEmpl;
    private Date date;
    private Time startTime;
    private Time endTime;

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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Time getStartTime() {
        return startTime;
    }

    public void setStartTime(Time startTime) {
        this.startTime = startTime;
    }

    public Time getEndTime() {
        return endTime;
    }

    public void setEndTime(Time endTime) {
        this.endTime = endTime;
    }
}
