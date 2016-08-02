var Alarm = require('./../js/alarm.js').alarmModule;

$(document).ready(function(){
  $('#current-time').text(moment().format("h:mm:ss A"));
  setInterval(function(){
    $('#current-time').text(moment().format("h:mm:ss A"));
  }, 100);
  $("#set-alarm").submit(function(event){
    event.preventDefault();
    var timeInput = $("#time").val();
    time = moment(timeInput, "HH:mm");
    $("#alarm-time").text(time.format("h:mm A"));
    $("#confirm").show();
    var newAlarm = new Alarm(time);
    var checkAlarm = setInterval(function(){
      if (newAlarm.alarmTrigger()) {
        $("#alarm-activated").show();
        clearInterval(checkAlarm);
      }
    }, 1000);
  });

  $("#snooze").click(function(){
    $("#alarm-activated").hide();
    setTimeout(function(){$("#alarm-activated").show();},10000);
  });

  $("#alarm-off").click(function(){
    $("#alarm-activated").hide();
  });
});
