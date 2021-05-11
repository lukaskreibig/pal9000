import React from 'react'


export default function formatDate(date) {
    date.toLocaleDateString(undefined, {day :'numeric', month: 'long'});

 export default function formatTemperature(temperature, isMetric) {
let returnTemp = temperature;
if(!isMetric) {
    returnTemp = (temperature - 32) * (5 / 9);
}
return Math.round(returnTemp);
 }
