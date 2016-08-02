function Alarm(timeInput) {
  // console.log(timeInput);
  this.time = timeInput;
}

Alarm.prototype.alarmTrigger = function() {
  if (this.time.format("HH:mm") === moment().format("HH:mm")) return true;
  else return false;
};

exports.alarmModule = Alarm;
