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
        $('.highlight').removeClass('highlight');
    })

    $("#sentence").append(sentences[0]);

    //will match up a keypress id and add a class to change its bgcolor
    $(document).keypress(function (event) {
        let keyPress = event.which;
        $('#' + keyPress).addClass('highlight');

        //logic to check if current keypress matches with the leading letter
        if (sentences[0].charCodeAt(0) === keyPress){
            console.log("YOU RIGHT");
        } else if (sentences[0].charCodeAt(0) !== keyPress) {
            console.log("YOU WRONG");
        }
    })
})