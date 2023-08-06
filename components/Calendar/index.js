// components/GoogleCalendar.js
import React, { useEffect } from "react";
import { Calendar } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import googleCalendarPlugin from "@fullcalendar/google-calendar";

const GoogleCalendar = ({ apiKey, calendarId }) => {
  useEffect(() => {
    const calendarEl = document.getElementById("calendar");
    const calendar = new Calendar(calendarEl, {
      plugins: [dayGridPlugin, googleCalendarPlugin],
      initialView: "dayGridMonth",
      events: {
        googleCalendarApiKey: apiKey,
        googleCalendarId: calendarId,
      },
      timeZone: "Africa/Casablanca",
    });

    calendar.render();
  }, [apiKey, calendarId]);

  return <div id="calendar" style={{ padding: "30px" }}></div>;
};

export default GoogleCalendar;
