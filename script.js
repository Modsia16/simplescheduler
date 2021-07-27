var timeDisplayEl = $('#time-display');
var eventSubmissionEl = $('#event');
var saveButtonEl = $('#save-btn');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  } 



setInterval(displayTime, 1000);
