zoey_text = document.getElementById("redirect-text");

let seconds_left = 3;

var x = setInterval(function(){
    if (seconds_left <= 0) {
        clearInterval(x);
        window.location.href = "https://www.gofundme.com/f/help-zoey-aan-een-nieuwe-hulphond";
    } else {
        zoey_text.innerHTML = "U wordt over " + seconds_left + " doorgestuurd naar de infopagina voor de hulphond van Zoey.";
        seconds_left -= 1;
    }
}, 1000);