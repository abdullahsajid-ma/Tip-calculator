const takeTotalBill = document.getElementById('billTotal');
const takeTipInput = document.getElementById("tipInput");
const billDisplay = document.getElementById('perPersonTotal');
const inct = document.querySelector('.incc');
const dect = document.querySelector('.decc');
let noOfpeople = document.getElementById('noOfPeople');
let takeVal = Number(noOfpeople.innerHTML);
takeTipInput.addEventListener("keyup",TotalCal);
takeTotalBill.addEventListener("keyup",TotalCal);
inct.addEventListener("click",increment);
dect.addEventListener("click",decrement);
function TotalCal(){
    //Taking value from input of TotalBill
    const tBill = Number(takeTotalBill.value);
    //taking value from input of tip and get percentage
    const ttip = Number(takeTipInput.value) / 100;
    //multiply totalBill and tipPercentage
    const tipAmount  = tBill * ttip;
    //take tipAmount and add them in totalBill
    const total = tBill + tipAmount;
    //divided by people
    const divOfpeople = total / takeVal;
    //display total value in No Of People
    billDisplay.innerHTML = `$${divOfpeople.toFixed(2)}`;
}

function increment(){
    takeVal++;
    noOfpeople.innerHTML = takeVal;
    TotalCal();
}
function decrement(){
    if(takeVal>=2){
        takeVal--;
        noOfpeople.innerHTML = takeVal;
        TotalCal();
    }
}
