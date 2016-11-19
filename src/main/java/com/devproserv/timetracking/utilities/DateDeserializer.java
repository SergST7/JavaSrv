package com.devproserv.timetracking.utilities;

import java.lang.reflect.Type;
import java.sql.Date;
import java.text.ParseException;
import java.text.SimpleDateFormat;

import com.google.gson.JsonDeserializationContext;
import com.google.gson.JsonDeserializer;
import com.google.gson.JsonElement;
import com.google.gson.JsonParseException;

public class DateDeserializer implements JsonDeserializer<Date> {

    @Override
    public Date deserialize(JsonElement jsonElem, Type type, JsonDeserializationContext context)
            throws JsonParseException {
        
        SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
        
        Date date = null;
        
        String partOfjson = jsonElem.getAsJsonPrimitive().getAsString();
        
        java.util.Date datefirst = null;
        
        try {
            datefirst = sdf.parse(partOfjson);
        } catch (ParseException e1) {
            e1.printStackTrace();
        }
        long millisec = datefirst.getTime();
        
        date = new Date(millisec);
        
        return date;
    }

}
