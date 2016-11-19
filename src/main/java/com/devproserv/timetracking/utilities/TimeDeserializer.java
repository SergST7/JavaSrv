package com.devproserv.timetracking.utilities;

import java.lang.reflect.Type;
import java.sql.Time;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;

public class TimeDeserializer implements JsonDeserializer<Time> {

    @Override
    public Time deserialize(JsonElement jsonElem, Type type, JsonDeserializationContext context)
            throws JsonParseException {
        
        SimpleDateFormat sdf = new SimpleDateFormat("HH:mm:ss");
        Time time = null;
        try {
            time = new Time(sdf.parse(jsonElem.getAsJsonPrimitive().getAsString()).getTime());
        } catch (ParseException e) {
            e.printStackTrace();
        }
        
        return time;
    }

}
