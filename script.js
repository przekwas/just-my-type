
$(document).ready(function () {

    //global variables
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let sentenceIndex = 0;
    let letterIndex = 0;
    let mistakesMade = 0;

    //sets the current sentence and letter to add to their respective divs
    let currentSentence = sentences[0];
    let currentLetter = currentSentence[0];
    let targetLetterDiv = $("#target-letter");
    targetLetterDiv.text(currentLetter);
    $("#sentence").append(sentences[sentenceIndex]);

    //hides the keyboard on page load
    $("#keyboard-upper-container").toggle();

    //making my life easier
    let body = $("body");

    //this will check for someone pressing shift, if held, show the uppercase
    $(document).keydown(function (event) {
        if (event.which === 16 || event.which === 20) {
            $("#keyboard-lower-container").hide();
            $("#keyboard-upper-container").toggle();
        }
    })
    //this will check for someone letting go of shift, if let go, show the lowercase again AND it'll remove the yellow bgcolor class
    $(document).keyup(function (event) {
        if (event.which === 16 || event.which === 20) {
            $("#keyboard-upper-container").hide();
            $("#keyboard-lower-container").toggle();
        }
        //changes bg color back to normal
        $('.highlight').removeClass('highlight');
    })


    $(document).keypress(function (event) {
        //highlights the letters
        let keyPress = event.which;
        $('#' + keyPress).addClass('highlight');

        let currentSentence = sentences[sentenceIndex];
        let currentLetter = currentSentence[letterIndex];

        letterIndex++;
        let nextLetter = currentSentence[letterIndex];

        targetLetterDiv.text(nextLetter);

        //moves the yellow block over
        $("#yellow-block").animate({ left: "+=17.5px" }, { duration: 1, easing: "linear" });

        //checks accuracy and adds the glyphicons to the feedback div only until the sentence is ran through
        if (letterIndex < currentSentence.length) {
            if (event.which === currentLetter.charCodeAt()) {
                $("#feedback").append("<span class = 'glyphicon glyphicon-ok'></span>");
            } else {
                $("#feedback").append("<span class = 'glyphicon glyphicon-remove'></span>");
                mistakesMade++;
            }
        } else {
            $("#feedback").empty();
            sentenceIndex++;
            $("#sentence").text(sentences[sentenceIndex]);
            letterIndex = 0;
            $("#yellow-block").animate({ left: "15px" }, { duration: 1, easing: "linear" });
        }
    })
})