// For neogcamp: please read commented code at bottom
var billAmount = document.querySelector("#billAmount");
var cashGiven = document.querySelector("#cashGiven");
var checkButton = document.querySelector("#checkButton");
var writeMessage = document.querySelector("#message");
var noOfNotes = document.querySelectorAll("#noOfNotes");
var billDiv = document.querySelector('#billDiv');
var cashDiv = document.querySelector('#cashDiv');
var nextButton = document.querySelector('#nextButton');


const notes = [2000, 500, 100, 20, 10, 5, 1];

cashDiv.style.display = 'none';
writeMessage.style.display = 'none';

nextButton.addEventListener('click', function validateBillAmount() {
    if (billAmount.value > 0) {
        cashDiv.style.display = 'flex';
        nextButton.style.display= 'none';
    } else {

        showMessage("Please enter a valid amount")
    }

})

// converting the value to number, solution was found on discord.

checkButton.addEventListener('click', function validateCashGivenAmount(){
    if(billAmount.value >= 0 && cashGiven.value >= 0){
        if(Number(cashGiven.value) === Number(billAmount.value)){
            showMessage("No change to be returned.")
        }else{
            if (Number(cashGiven.value) >= Number(billAmount.value)) {
                var changeToBeGiven = Number(cashGiven.value) - Number(billAmount.value);
                calculateChange(changeToBeGiven);
                writeMessage.style.display = 'none';
            } else {
                showMessage("Bhai free me le jao, tumse na ho payega!")     
            } 
        }
        
    }else{
        showMessage("Please enter a valid amount.")
    }
    

})





function calculateChange(changeToBeGiven) {
    for (i = 0; i < notes.length; i++) {
        var numberOfNotes = Math.trunc(changeToBeGiven / notes[i])
        changeToBeGiven = changeToBeGiven % notes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }

}

function showMessage(message) {
    writeMessage.style.display = 'block';
    writeMessage.innerText = message
}















//Below code logic was build by me then I was stucked so I watched the video and wrote above code ....
// var cashGiven=document.querySelector("#cashGiven");
// var billAmount=document.querySelector("#billAmount");
// var billAmountButton=document.querySelector("#billAmountButton");
// var cashGivenButton=document.querySelector("#cashGivenButton");


// var billReceived = 0;
// var cashReceived = 0;
// var totalChange= 0;
// var notes = [2000, 500, 100, 50, 10, 5, 2, 1];

//  function billAmountClickHandler(){
//     billReceived= billAmount.value;
//     console.log(billReceived)
// }

// function cashGivenClickHandler(){
//     cashReceived = cashGiven.value;
//     console.log(cashReceived)
// }
// function calculateChange(){
//     totalChange= cashReceived - billReceived
//     console.log(totalChange)
// }

// function notesDivision(){
//     for (i=0; i < notes.length; i++){
//         if (totalChange > notes[i])
//         {
//             console.log( totalChange /notes[i] )
//         }
//         break;

//     }

// }

// billAmountButton.addEventListener('click', billAmountClickHandler);
// cashGivenButton.addEventListener("click", () =>{
//     cashGivenClickHandler();
// calculateChange();
// notesDivision()});