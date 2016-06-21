var rng = Math.floor((Math.random() * 10));
var start = 0;




function increase() {
    "use strict";
    rng = Math.floor((Math.random() * 100000));
    start = rng;
    var nummsg = document.getElementById("Numbers");
    nummsg.textContent = start;
}

function plus1() {
    "use strict";
    var get = document.getElementById("lists"), temp = get.getElementsByTagName("li"),
        removebutton = document.getElementById("append");
    for (var i=0; i < temp.length; i++){
        temp.item(i).textContent= temp.item(i).textContent+1;
    }
    removebutton.removeAttribute("onclick");
}