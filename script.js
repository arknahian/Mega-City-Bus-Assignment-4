function getNumericValue(id) {
    var input = document.getElementById(id).value;
    input = +input;
    return input;
}


function plusBtnHandler(btnId, userInputId) {
    var btn = document.getElementById(btnId);
    btn.addEventListener("click", function () {
        var getInput = getNumericValue(userInputId);
        var userInput = document.getElementById(userInputId).value = getInput + 1;
        makeTotal(btnId, userInput);
    })
}



function makeTotal(btnId, quantity){
    const firstClassPrice = 150;
    const economyClassPrice = 100;

    const firstClassInput = getNumericValue("firstClass-input");
    const economyClassInput = getNumericValue("economyClass-input");
    if (btnId === "economyClass-plus-btn" || btnId === "economyClass-minus-btn") {
        var subtotal = document.getElementById("subtotal").innerText = economyClassPrice * quantity + firstClassInput * firstClassPrice;
        var vatCharge = document.getElementById("vatCharge").innerText = subtotal * 0.1;
        var total = document.getElementById("total").innerText = vatCharge + subtotal;
    }
    else{
        var subtotal = document.getElementById("subtotal").innerText = firstClassPrice * quantity + economyClassInput * economyClassPrice;
        var vatCharge = document.getElementById("vatCharge").innerText = subtotal * 0.1;
        var total = document.getElementById("total").innerText = vatCharge + subtotal;
    }
}


plusBtnHandler("firstClass-plus-btn", "firstClass-input");
plusBtnHandler("economyClass-plus-btn", "economyClass-input");


function minusBtnHandler(btnId, userInputId) {
    var getBtnId = document.getElementById(btnId);
    getBtnId.addEventListener("click", function () {
        var getInput = getNumericValue(userInputId);
        if (getInput > 0) {
            var userInput = document.getElementById(userInputId).value = getInput - 1;
            makeTotal(btnId, userInput);
        }
    })
}
minusBtnHandler("firstClass-minus-btn", "firstClass-input");


minusBtnHandler("economyClass-minus-btn", "economyClass-input");


                                                 





