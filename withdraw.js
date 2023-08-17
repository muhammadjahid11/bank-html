/*
1. add event  handler with the withdraw button
2. get the withdraw  amount from the withdraw input field
2.5 also make sure to convert the input into a number by using parseFloat
3. Get previous withdraw total
4.  Calculate total withdraw Amount
4.5 set total withdraw amount
5. tet the previous balance total
6. calculate new balance total
6.5 set the new balance total
f
7. clear the input field
*/

//step-1:
document.getElementById('btn-withdraw').addEventListener('click', function(){
    // step-2:
    const withdrawField =document.getElementById('Withdraw-field');
    const  newWithDrawAmountString = withdrawField.value;
    const newWithdrawAmount =parseFloat(newWithDrawAmountString);

     // step-7
     withdrawField.value = '';

    if(isNaN(newWithdrawAmount)){
        alert('valid number provide me')
        return
    }
    
    //step-3:
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawTotalString);
    

    //step-5:
    const ballanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = ballanceTotalElement.innerText;
    const previousBalanceTotal =parseFloat(previousBalanceTotalString);
      
    if(newWithdrawAmount > previousBalanceTotal){
        alert('baapre gase ar kata nai');
        return;
    }

    //step-4:
    const currentWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = currentWithdrawTotal;
    
    // step-6:
    const newBalanceTotal =previousBalanceTotal - newWithdrawAmount;
    ballanceTotalElement.innerText = newBalanceTotal;

    console.log(previousBalanceTotal)

});