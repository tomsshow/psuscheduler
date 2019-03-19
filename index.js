const weekdays = ['Monday', 'Tuesday','Wednesday', 'Thursday', 'Friday']
const thirtyOneDays = ['January','March','May','July','August','October','December']
const thirtyDays = ['April','June','September','November']
const twentyEightDays = ['Febuary']


//startDate
const startEl = document.getElementById('start');


// let end = null
const endEl = document.getElementById('end');

document.getElementById('submit').addEventListener('click', e=>{
    const startValue = startEl.value
    
    const endValue = endEl.value
    console.log({startValue, endValue})
    //sample output: {startValue: "2019-03-12", endValue: "2019-03-19"}
    var dates = getDates(new Date(startValue.substring(0,4), startValue.substring(5,7), startValue.substring(8,10)), new Date(endValue.substring(0,4), endValue.substring(5,7), endValue.substring(8,10)));                                                                                                         
    //   console.log(dates);
      dates.forEach(function(date) {
        //   date.
        console.log(date);
      });

})

console.log('memes loaded')

  

  // date range test vv
//gist.github.com/miguelmota/7905510  
// Returns an array of dates between the two dates
var getDates = function(startDate, endDate) {
    var dates = [],
        currentDate = startDate,
        addDays = function(days) {
          var date = new Date(this.valueOf());
          date.setDate(date.getDate() + days);
          return date;
        };
    while (currentDate <= endDate) {
      dates.push(currentDate);
      currentDate = addDays.call(currentDate, 1);
    }
    return dates
    console.log()
    // return dates.toISOstring().split('T'); //type error
  };


  