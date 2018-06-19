
// //definicja funkcji 
// const getAverage = (array) => {

//     console.log(array[0]);
//     console.log(array[0].date);
//     console.log(array[0].visits);
//     let testDate =  new Date('2018-01-01');
//     // let obj = {testDate: "test"}
//     // console.log(obj)

//     let testValue = 9;
//     let testObject = {averageVisits: testValue }
//     // console.log(testObject);

//     return testObject;
// }; 

let oneWeek = [
  { date: new Date('2018-01-01'), visits: 32 },
  { date: new Date('2018-01-02'), visits: 82 },
  { date: new Date('2018-01-03'), visits: 74 },
  { date: new Date('2018-01-04'), visits: 35 },
  { date: new Date('2018-01-05'), visits: 54 },
  { date: new Date('2018-01-06'), visits: 64 },
  { date: new Date('2018-01-07'), visits: 44 },
];

function getAverage(array) {
  let total = 0;
  for (let i = 0; i < array.length; i++) {
    total += array[i].visits;
  }
  let average = total / array.length;

  let averageObj = {
    "averageVisits": average,
  }

  console.log(averageObj);
  return averageObj;

}

getAverage(oneWeek);


// function getAverageVisitsPerDay(array, wantAverageVisitsPerDay) {
//   if (wantAverageVisitsPerDay == true) {
//     let averageVisitsPerDay = {

//     }
//   }
// }



// spróbuj odniesc sie do tej funkcji w getAverage, zeby dostac usrednione dane z kazdego dnia (jako jeden duzy obiekt, w ktorym znajduja sie mniejsze)
function getDayName(array) {
  for (let i = 0; i < array.length; i++) {
    let date = array[i].date;
    let dayNumber = date.getDay();
    let dayName = toDayName(dayNumber);
    console.log(dayName);
  }
}

getDayName(oneWeek);


function toDayName(dayNumber) {
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










// module.exports = getAverage;
