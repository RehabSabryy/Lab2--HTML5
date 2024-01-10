// Task 1 => Geolocation

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayPosition, handleError);
    } else {
        handleError(document.getElementById("location"));
    }
}

function displayPosition(position) {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    console.log(latitude, longitude);
    window = open("http://maps.google.com/maps?q=" + latitude + ',+' + longitude);
    window.focus();

}

function handleError(x) {
    x.innerHTML = "Geolocation is not supported by this browser.";
}

function clearWatch() {
    navigator.geolocation.clearWatch(window);
}
// end task 1

// Task 2 Web Worker

let worker1 = new Worker("worker1.js");
let sum = document.getElementById("sum");
let bg = document.getElementById("change-bg");
let worker2 = new Worker("worker2.js");
let num = document.getElementById("webworker2");

sum.onclick = function (){
    worker1.postMessage("");
}

worker1.onmessage = function (message) {
    alert(message.data);
}

bg.onclick = function () {
    document.body.style.background = (document.body.style.background === 'wheat') ? 'pink' : 'wheat';
}

num.onclick = function () {
    worker2.postMessage("");
}

worker2.onmessage = function (message) {
    alert(message.data);
}


// end Task 2