// Creates function to initiate and load html and CSS.
$(document).ready(function () {
    // Function to access moment.js and retrieve current day & time.
    $("#currentDay").text(moment().format("MMMM Do YYYY, h:mm:ss a"));
    // Assigns saveBtn event.listener "click" to retrieve user input and time. 
    $(".saveBtn").on("click", function () {
        console.log( "Event has been Saved!");
        // Gets local values of .siblings html "currentEvent" Attribute
        var text = $(this).siblings(".currentEvent").val(); 
        // Gets local values of .parent html "id" Attribute
        var time = $(this).parent().attr("id"); 
        // Places the .setItem of time and user input text intop local storage.
        localStorage.setItem(time, text);
    })
    // Sets the value of the currentEvent textarea. Loads any saved data from localStorage for that timeblock. 
    $("#hour7.currentEvent").val(localStorage.getItem("hour7"));
    $("#hour8.currentEvent").val(localStorage.getItem("hour8"));
    $("#hour9.currentEvent").val(localStorage.getItem("hour9"));
    $("#hour10.currentEvent").val(localStorage.getItem("hour10"));
    $("#hour11.currentEvent").val(localStorage.getItem("hour11"));
    $("#hour12.currentEvent").val(localStorage.getItem("hour12"));
    $("#hour13.currentEvent").val(localStorage.getItem("hour13"));
    $("#hour14.currentEvent").val(localStorage.getItem("hour14"));
    $("#hour15.currentEvent").val(localStorage.getItem("hour15"));
    $("#hour16.currentEvent").val(localStorage.getItem("hour16"));
    $("#hour17.currentEvent").val(localStorage.getItem("hour17"));
    $("#hour18.currentEvent").val(localStorage.getItem("hour18"));

    function hourTracker() {
        //The currentHour variable calls the moment.js for the hour. 
        var currentHour = moment().hour(); 
        // Creates a loop to evaluate the time state of each timeblock in 1 hour incruments.
        $(".time-block").each(function () {
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            // If statement to identify if currentHour is past the blockHour time. Sets value to past & removes other classes.
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                $(this).removeClass("present");
            } 
            // Else if statement to identify if blockHour is equal to currentHour. Sets value to present & removes other classes.
            else if (blockHour === currentHour) {
                $(this).removeClass("past");
                $(this).addClass("present");
                $(this).removeClass("future");
            }
            // If first 2 parameters are not met then the else statement identifies that the blockHour is in the future. Sets value to Future & removes other classes.
            else {
                $(this).removeClass("present");
                $(this).removeClass("past");
                $(this).addClass("future");
            }
        })
    }
    // Re-initiates function to rerun
    hourTracker();
})