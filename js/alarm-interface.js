$(document).ready(function(){
  $('#current-time').text(moment().format("h:mm A"));
  $("#set-alarm").submit(function(event){
    event.preventDefault();
    var time = $("#time").val();
    momentTime = moment(time, "HH:mm");
    console.log(momentTime.format("h:mm A"));
  });
});
