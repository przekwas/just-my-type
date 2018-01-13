let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];

//on page load, hide the uppercase
$(document).ready(function () {
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

    let numberOfMistakes = 0;
    let numberCorrect = 0;
    $("#sentence").append(sentences[0]);

    //gets the lengths of each sentence in the array
    let lengths = sentences.map(function (word) {
        return word.length
    });



    //will match up a keypress id and add a class to change its bgcolor
    $(document).keypress(function (event) {
        let keyPress = event.which;
        $('#' + keyPress).addClass('highlight');
        if (event.which > 46 && event.which !== 91 || event.which === 32) {
            $("#yellow-block").animate({ left: "+=17" }, { duration: 1, easing: "linear" });
            console.log(event.which);
        }

        // for (let i = 0; i < lengths.length; i++) {
        //     //logic to check if current keypress matches with the leading letter
        //     if (lengths[i].charCodeAt(i) === keyPress) {
        //         numberCorrect++;
        //         console.log("YOU RIGHT");
        //     } else if (lengths[i].charCodeAt(i) !== keyPress) {
        //         numberOfMistakes++;
        //         console.log("YOU WRONG");
        //     }
        // }
    })
})