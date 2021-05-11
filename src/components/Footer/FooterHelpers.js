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

 unction displaySpeed(speed) {
	let returnSpeed = speed
	if (!isMetric()) {
		returnSpeed = speed / 1.609
	}
	return Math.round(returnSpeed)
}
