$(document).ready(function() {

    $('#first').on('click', function() {
        alert('You have clicked!');
        $(this).css('background-color', 'red');
    });

    $('.NOUN').on('click', function() {
        alert('You have clicked!');
        $(this).css('background-color', 'green');
    });

});