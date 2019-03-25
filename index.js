//startDate
const startEl = document.getElementById('start');

//endDate
const endEl = document.getElementById('end');

document.getElementById('submit').addEventListener('click', e => {
  const startValue = startEl.value

  const endValue = endEl.value
  console.log({ startValue, endValue })
  //^sample output: {startValue: "2019-03-12", endValue: "2019-03-19"}
  var dates = getDates(new Date(startValue.substring(0, 4), startValue.substring(5, 7)-1, startValue.substring(8, 10)), new Date(endValue.substring(0, 4), endValue.substring(5, 7)-1, endValue.substring(8, 10)));

  var listOfDates = document.createElement("ol");
listOfDates.style.listStyleType= 'none';
listOfDates.style.paddingLeft = 0;


  //for each item in dates array, print the date
  dates.forEach(function (date) {
    //makes a list item
    var d = document.createElement("li");

        d.innerHTML = date;

        d.setAttribute('data-dow', date.getDay());
    
    listOfDates.appendChild(d);

    console.log(date);
    // console.log(date.toString().substring(0,15));
 });

  document.getElementById("scheduledDates").appendChild(listOfDates);
})

console.log('memes loaded')



// date range test vv
//gist.github.com/miguelmota/7905510  
// Returns an array of dates between the two dates
var getDates = function (startDate, endDate) {
  var dates = [],
    currentDate = startDate,
    addDays = function (days) {
      var date = new Date(this.valueOf());
      date.setDate(date.getDate() + days);
      return date;
    };
  while (currentDate <= endDate) {
    dates.push(currentDate);
    currentDate = addDays.call(currentDate, 1);
  }
  return dates
};


// document.querySelectorAll('li[data-dow="5"]'); retrieves dates that are friday