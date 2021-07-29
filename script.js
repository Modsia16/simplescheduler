var timeDisplayEl = $('#time-display');

function displayTime() {
    var rightNow = moment().format('MMM DD, YYYY [at] hh:mm:ss a');
    timeDisplayEl.text(rightNow);
  } 

/*relaying textarea to the save*/

$(document).ready(function (){ 
    $(".save-btn").on("click", function () {
        var text = $(this).siblings(".task").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
})
    /*past present future tracker*/
function myFunction() {
    
    var rightNow = moment().hour();
/*background time color change*/
    $(".hour-block").each(function () {
        var blockTime = parseInt($(this).attr("id").split("hour")[1]);
        
        if (blockTime < rightNow) {
            $(this).removeClass("#future");
            $(this).removeClass("#present");
            $(this).addClass("#past");
        }
        else if (blockTime === rightNow) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }
        else {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future")
        }         
    })
}

/*storage gets*/
/*$()
if (localStorage.getItem('.text') !== null) {
    console.log(`Task exists`);
} else {
    console.log(`Task does not exist`);
}*/

setInterval(displayTime, 1000);
})
