(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Alarm(timeInput, snoozeInput) {
  this.time = timeInput;
  this.snoozeInterval = snoozeInput;
}

Alarm.prototype.alarmTrigger = function() {
  if (this.time.format("HH:mm") === moment().format("HH:mm")) return true;
  else return false;
};

exports.alarmModule = Alarm;

},{}],2:[function(require,module,exports){
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
    var snooze = ($("#snooze-time").val()) * 60000;
    var newAlarm = new Alarm(time, snooze);
    console.log(newAlarm);
    var checkAlarm = setInterval(function(){
      if (newAlarm.alarmTrigger()) {
        $("#alarm-activated").show();
        clearInterval(checkAlarm);
      }
    }, 1000);

    $("#snooze").click(function(){
      $("#alarm-activated").hide();
      setTimeout(function(){$("#alarm-activated").show();},newAlarm.snoozeInterval);
    });
  });



  $("#alarm-off").click(function(){
    $("#alarm-activated").hide();
  });


});

},{"./../js/alarm.js":1}]},{},[2]);
