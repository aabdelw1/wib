import React from "react";

export const getDuration = (timeline) => {

  if (timeline.split(",")[0] == timeline.split(",")[1]) return "1 day"
  const date_1 = new Date(timeline.split(",")[0])
  const date_2 = new Date(timeline.split(",")[1])

  //convert to UTC
  var date2_UTC = new Date(
    Date.UTC(date_2.getUTCFullYear(), date_2.getUTCMonth(), date_2.getUTCDate())
  );
  var date1_UTC = new Date(
    Date.UTC(date_1.getUTCFullYear(), date_1.getUTCMonth(), date_1.getUTCDate())
  );

  var yAppendix, mAppendix, dAppendix;

  //--------------------------------------------------------------
  var days = date2_UTC.getDate() - date1_UTC.getDate();
  if (days < 0) {
    date2_UTC.setMonth(date2_UTC.getMonth() - 1);
    days += DaysInMonth(date2_UTC);
  }
  //--------------------------------------------------------------
  var months = date2_UTC.getMonth() - date1_UTC.getMonth();
  if (months < 0) {
    date2_UTC.setFullYear(date2_UTC.getFullYear() - 1);
    months += 12;
  }
  //--------------------------------------------------------------
  var years = date2_UTC.getFullYear() - date1_UTC.getFullYear();

  if (years > 1) yAppendix = " years";
  else yAppendix = " year";
  if (months > 1) mAppendix = " months";
  else mAppendix = " month";
  if (days > 1) dAppendix = " days";
  else dAppendix = " day";

  let finalTime = ""


  if (years > 0) finalTime+= `${years}${yAppendix}${months > 0 ? ", " : ""}`
  if (months > 0) finalTime+= `${months}${mAppendix}${days > 0 ? ", " : ""}`
  if (days > 0) finalTime +=  days + dAppendix

  return finalTime

  return (years + yAppendix + ", " + months + mAppendix + ", and " + days + dAppendix);

  function DaysInMonth(date2_UTC) {
    var monthStart = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth(), 1);
    var monthEnd = new Date(date2_UTC.getFullYear(), date2_UTC.getMonth() + 1, 1);
    var monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24);
    return monthLength;
  }
}

