var cashGiven=document.querySelector("#cashGiven");
var billAmount=document.querySelector("#billAmount");
var billAmountButton=document.querySelector("#billAmountButton");
var cashGivenButton=document.querySelector("#cashGivenButton");

// function calculateChange(billAmount, cashGiven){

// }



function billAmountClickHandler(){
    var billAmountReceived = billAmount.value;
    console.log(billAmountReceived)
}

function cashGivenClickHandler(){
    var cashReceived = cashGiven.value;
    console.log(cashReceived)
}

billAmountButton.addEventListener('click', billAmountClickHandler);
cashGivenButton.addEventListener("click", cashGivenClickHandler);