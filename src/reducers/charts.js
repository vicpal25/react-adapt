import { FILTERED_ACTIVITIES } from 'actions/types';

export default function(state = [], action) {
  switch (action.type) {

    case FILTERED_ACTIVITIES:

        const response = action.payload.data, max = 5;
        let count = 0, filteredData = [];

        response.map(element => {
          if(count < max) {
              element.average_speed = mscTomph(element.average_speed);
              element.start_date_local = converDate(element.start_date_local);
              filteredData.push(element);
              count++;
          }
        })

      return [...state, filteredData];
    default:
      return state;
  }
}

function mscTomph(msc) {
  return Math.round(msc * 3600 / 1610.3*1000)/1000;
}

function metersToMiles(meters) {
  return Math.round(meters*0.000621371192);
}

function secondsToHours(seconds) {
  return  Math.floor(seconds / 60);
}

function converDate(date) {
  var timestamp = new Date(date);
  return timestamp.toLocaleDateString();
}


