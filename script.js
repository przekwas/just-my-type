

/*THIS IS THE FUNCTIONS SECTION*/

//function to hide the upper case letters
function hideUpperCaseBox() {
    $("#keyboard-upper-container").hide();
}

function hideLowerCaseBox() {
    $("#keyboard-lower-container").hide();
}

/*THIS ENDS THE FUNCTIONS SECTION*/




//on page load, hide the uppercase
$(document).ready(function () {
    hideUpperCaseBox();

    //this will check for someone pressing shift, if held, show the uppercase
    $(document).keydown(function (event) {
        if (event.keyCode == 16) {
            hideLowerCaseBox();
            $("#keyboard-upper-container").toggle();
        }
    })

    //this will check for someone letting go of shift, if let go, show the lowercase again
    $(document).keyup(function (event) {
        if (event.keyCode == 16) {
            hideUpperCaseBox();
            $("#keyboard-lower-container").toggle();
        }
    })

    //this will check for someone pressing caps, if held, show the uppercase
    $(document).keydown(function (event) {
        if (event.keyCode == 20) {
            hideLowerCaseBox();
            $("#keyboard-upper-container").toggle();
        }
    })

    //this will check for someone letting go of caps, if let go, show the lowercase again
    $(document).keyup(function (event) {
        if (event.keyCode == 20) {
            hideUpperCaseBox();
            $("#keyboard-lower-container").toggle();
        }
    })

    //this will check for any keypress done by the user
    $(document).keypress(function (event) {
        console.log(event.which);
    })


})

