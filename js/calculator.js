window.addEventListener("load", function() {
    let elementButton = document.getElementById("button");
    let elementNumber1 = document.getElementById("number1");
    let elementNumber2 = document.getElementById("number2");

    elementButton.addEventListener("click", function() {
        let number1 = parseFloat(elementNumber1.value);
        let number2 = parseFloat(elementNumber2.value);

        alert(number1 + number2);
    });
});