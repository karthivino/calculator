const display = document.getElementById("display");

    function addToDisplay(input) {
        display.value += input;
    }

    function clearDisplay() {
        display.value = "";
    }

    function Calculate() {
        try {
            display.value = eval(display.value.replace(/^0+/, ''));
        } catch (error) {
            display.value = "Error";
        }
    }
    function removeLastEntry() {
        display.value = display.value.slice(0, -1);
    }