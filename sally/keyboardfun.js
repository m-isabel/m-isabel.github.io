var et = "6984"; //ET
var sally = "83";
var isabel = "73";
var input = "";
var timer;
var mode = false;

$(document).keyup(function(e) {
    //alert(e.which);
    input += e.which;    
    
    clearTimeout(timer);
    timer = setTimeout(function() { input = ""; }, 200);
    
    check_input();
});

function check_input() {
    //alert(input);
    if(input == isabel) {
        //the secret code
        alert('Isabel is Sallys favorite kid!');	
    }
    else if(input == sally) {
        alert('Sally is the best!');
    }
    else if(input == et) {
        alert("ExactTarget is the best!");
    }
}

$(document).ready(function() {
    setInterval(function() { $('#info').html(); }, 100);
});