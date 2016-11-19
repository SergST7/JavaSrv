package com.devproserv.timetracking.utilities;

import java.lang.reflect.Type;
import java.sql.Date;

import com.google.gson.JsonElement;
import com.google.gson.JsonPrimitive;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;

/**
 * Custom date serializer for proper json handling
 * 
 * @author Vovas11
 *
 */

public class DateSerializer implements JsonSerializer<Date>{

    @Override
    public JsonElement serialize(Date date, Type type, JsonSerializationContext context) {
        
        // returns date in yyyy-mm-dd format
        JsonElement jsonElem = date == null ? null
                                            : new JsonPrimitive(date.toString());
        return jsonElem;
    }

}
