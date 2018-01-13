

/*THIS IS THE FUNCTIONS SECTION*/

function highlightButton(id) {
    let idNumber = $("#" + id);
    idNumber.css({ "background-color": "rgb(255,255,0)" });
}

function nohighlightButton(id) {
    let idNumber = $("#" + id);
    idNumber.css({ "background-color": "#f5f5f5" });
}



/*THIS ENDS THE FUNCTIONS SECTION*/




//on page load, hide the uppercase
$(document).ready(function () {
    $("#keyboard-upper-container").toggle();

    //this will check for someone pressing shift, if held, show the uppercase
    $(document).keydown(function (event) {
        if (event.which === 16 || event.which === 20) {
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").toggle();
        } 
    })
    //this will check for someone letting go of shift, if let go, show the lowercase again
    $(document).keyup(function (event) {
        if (event.which === 16 || event.which === 20) {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").toggle();
        }
        $('.highlight').removeClass('highlight');
    })

    $(document).keypress(function (event) {
        let keyPress = event.which;
        $('#' + keyPress).addClass('highlight');
    })
    

})