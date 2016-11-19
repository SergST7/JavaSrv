package com.devproserv.timetracking.utilities;

import java.lang.reflect.Type;
import java.sql.Time;

import com.google.gson.JsonElement;
import com.google.gson.JsonPrimitive;
import com.google.gson.JsonSerializationContext;
import com.google.gson.JsonSerializer;

/**
 * Custom time serializer for proper json handling
 * 
 * @author Vovas11
 *
 */

public class TimeSerializer implements JsonSerializer<Time>{

    @Override
    public JsonElement serialize(Time time, Type type, JsonSerializationContext context) {
        
        // returns time hh:mm:ss format
        JsonElement jsonElem = time == null ? null
                                            : new JsonPrimitive(time.toString());
        return jsonElem;
    }

}
