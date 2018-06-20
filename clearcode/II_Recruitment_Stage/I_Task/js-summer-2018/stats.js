const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];


const getAverage = (series, averageVisitsPerDay) => {
  
  if (averageVisitsPerDay === true) {
    let average;
    let result = {};
    for (let i = 0; i < weekDays.length; i++) {
      let selectedDays = getSelectedDays(weekDays[i], series);
      average = calculateAverageVisits(selectedDays);
      let key = weekDays[i];
      let value = getObject(average);
      result[key] = value;
    }
    return result;
  }

  else {
    let average = calculateAverageVisits(series);
    let result = getObject(average); 
    return result;
  }

}; 



const getSelectedDays = (dayName, series) => {
  let selectedDays = [];
  for (let i = 0; i < series.length; i++) {
    if (dayName === getDayName(series[i].date)) {
      selectedDays.push(series[i]);
    }
  }
  return selectedDays;
}



const getDayName = (date) => {
  let dayNumber = date.getDay();
  let dayName = toDayName(dayNumber);
  return dayName;
}



const calculateAverageVisits = (series) => {
  let total = 0;
  for (let i = 0; i < series.length; i++) {
    total += series[i].visits;
  }
  let average = total / series.length;
  return average;
}



const getObject = (average) => {
  let averageObj =
    {
      "averageVisits": average,
    };
  return averageObj;
}



const toDayName = (dayNumber) => {
  let text;
  switch (dayNumber) {
    case 0:
      text = "Sunday";
      break;
    case 1:
      text = "Monday";
      break;
    case 2:
      text = "Tuesday";
      break;
    case 3:
      text = "Wednesday";
      break;
    case 4:
      text = "Thursday";
      break;
    case 5:
      text = "Friday";
      break;
    case 6:
      text = "Saturday";
      break;
  }
  return text;
}



module.exports = getAverage;
