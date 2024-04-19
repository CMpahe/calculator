const display = document.getElementById("display");

function appendtodisplay(input){
    
    if(display.value == "0") {
        display.value = input;
    } else {
        display.value += input;
    }
    
}

function cleardisplay () {
    display.value = "0";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch(error) {
        display.value = "Error";
    }
}