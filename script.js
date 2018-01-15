$(document).ready(function () {

    //global variables
    let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
    let numberOfWords = 54;
    let sentenceIndex = 0;
    let letterIndex = 0;
    let mistakesMade = 0;
    let timeStampStart = 0;
    let timeStampEnd = 0;
    let keysPressed = 0;

    let replayButton = $("<input class='btn btn-success' type='button' value='Wanna Play Again?' onClick='window.location.reload()'>");

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

        //start the timer at first keypress
        if (keysPressed < 1) {
            timeStampStart = event.timeStamp;
            keysPressed++;
        }

        let currentSentence = sentences[sentenceIndex];
        let currentLetter = currentSentence[letterIndex];

        //moves the letter index over and gets the next letter to put into the target letter div on each keypress
        letterIndex++;
        let nextLetter = currentSentence[letterIndex];

        //throws next letter into the target div on keypress pass or fail
        targetLetterDiv.text(nextLetter);

        //moves the yellow block over
        $("#yellow-block").animate({ left: "+=17.5px" }, { duration: 1, easing: "linear" });

        if (sentenceIndex < sentences.length) {
            //checks accuracy and adds the glyphicons to the feedback div only until the sentence is ran through
            if (letterIndex < currentSentence.length) {
                if (event.which === currentLetter.charCodeAt()) {
                    $("#feedback").append("<span class='glyphicon glyphicon-ok'></span>");
                } else {
                    $("#feedback").append("<span class='glyphicon glyphicon-remove'></span>");
                    mistakesMade++;
                }
                //empty the feedback div, get the next sentence and put it in the sentence div, reset the yellow block
            } else if (sentenceIndex < sentences.length - 1) {
                $("#feedback").empty();
                sentenceIndex++;
                $("#sentence").text(sentences[sentenceIndex]);
                targetLetterDiv.text(sentences[sentenceIndex].charAt(0));
                letterIndex = 0;
                $("#yellow-block").animate({ left: "15px" }, { duration: 1, easing: "linear" });
            } else if (sentenceIndex < sentences.length) {
                //gets an end time, subtracts the start time, convert to minutes, calc wpm
                timeStampEnd = event.timeStamp;
                let diff = timeStampEnd - timeStampStart;
                let time = Math.floor(diff / 1000) / 60;
                let wpm = Math.floor(numberOfWords / time - 2 * mistakesMade);
                //clears out all the top divs, hides the block
                $("#sentence").empty();
                $("#target-letter").empty();
                $("#feedback").empty();
                $("#yellow-block").hide();
                //adds new text to the sentence div with game info
                $("#sentence").append("Ran out of sentences!\n" + "And you had " + wpm + " words per minute!");
                //fades in a replay button
                targetLetterDiv.append(replayButton).hide().delay(3000).fadeIn(500);
            }
        }
    })
})