const handleButtonColorChange = () => {
    let button = document.getElementById("button")
    // button.style.backgroundColor = 'red'
    if(button.style.backgroundColor === 'green'){
        button.style.backgroundColor = 'red'
    }else {
        button.style.backgroundColor = 'green'
    }
}

function textColor() {
    textColor = document.getElementById("text color");
    textColor.style.color = 'blue';
}

textColor()

function textFont() {
    textFont = document.getElementById("text font");
    textFont.style.fontFamily = "sans-serif";
}

textFont()

var dragged;

document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
    dragged = event.target;
    event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
    event.target.style.opacity = "";
}, false);

document.addEventListener("dragover", function(event) {
    event.preventDefault();
}, false);

document.addEventListener("dragenter", function(event) {
    if (event.target.className == "dropzone") {
        event.target.style.background = "orangered";
    }

}, false);

document.addEventListener("dragleave", function(event) {
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
    }

}, false);

document.addEventListener("drop", function(event) {
    event.preventDefault();
    if (event.target.className == "dropzone") {
        event.target.style.background = "";
        dragged.parentNode.removeChild( dragged );
        event.target.appendChild( dragged );
    }
}, false);