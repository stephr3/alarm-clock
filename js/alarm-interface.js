var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  $('#current-time').text(moment().format("h:mm A"));
  $("#set-alarm").submit(function(event){
    event.preventDefault();
    var timeInput = $("#time").val();
    time = moment(timeInput, "HH:mm");
    var newAlarm = new Alarm(time);
    var checkAlarm = setInterval(function(){
      if (newAlarm.alarmTrigger()) {
        alert("bzzzzzzzzzz");
        clearInterval(checkAlarm);
      }
    }, 1000);
    // checkAlarm();
  });

});
