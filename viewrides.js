$(document).ready(function(){
  var rides = localStorage.getItem('userRides');
  if(rides){

    numOfRides = rides.length;

    for(var i = 1; i<numOfRides; i++){
      html_string = "<tr><td>" + i + "</td><td>" + rides[i].date + "</td><td>" + rides[i].destination + "</td><td>" + rides[i].pickuplocation + "</td><td>" + rides[i].pickuptime + "</td></td>" + rides[i].ridefound + "</td></tr>"
    };

    $('#rides_table').append(html_string);

  }else{
    $('#container').append("<h2>You have not added any rides</h2>")

  }
  
})