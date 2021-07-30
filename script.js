/*top time display*/
var timeNow = moment().hour(); //moved up 
$(document).ready(function () { 

var timeDisplayEl = $('#time-display');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  } 

setInterval(displayTime, 1000);

/*relaying textarea to the save*/

    $(".save-btn").on("click", function () {
        var text = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text); /*not working */
    })

    /*past present future tracker*/
function timeStat() { /* not working properly*/
 
/*background time color change*/
console.log(timeNow)
    $(".hour-block .task").each(function () {
        var blockTime = parseInt($(this).attr("id"));
        console.log(blockTime)
        if (blockTime < timeNow) {
            $(this).removeClass("present");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        else if (blockTime === timeNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("past");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future")
        }         
    })
    
}

timeStat()

$("#row-eight .task").val(localStorage.getItem("row-eight"))
$("#row-nine .task").val(localStorage.getItem("row-nine"))
$("#row-ten .task").val(localStorage.getItem("row-ten"))
$("#row-eleven .task").val(localStorage.getItem("row-eleven"))
$("#row-twelve .task").val(localStorage.getItem("row-twelve"))
$("#row-one .task").val(localStorage.getItem("row-one"))
$("#row-two .task").val(localStorage.getItem("row-two"))
$("#row-three .task").val(localStorage.getItem("row-three"))
$("#row-four .task").val(localStorage.getItem("row-four"))

})
