function Alarm(timeInput, snoozeInput) {
  this.time = timeInput;
  this.snoozeInterval = snoozeInput;
}

Alarm.prototype.alarmTrigger = function() {
  if (this.time.format("HH:mm") === moment().format("HH:mm")) return true;
  else return false;
};

exports.alarmModule = Alarm;
