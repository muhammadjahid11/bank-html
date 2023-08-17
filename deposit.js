// step-1: add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function () {
    // console.log('Deposit button clicked');
    // step 2: get the deposit amount from the deposit input filed
    // for input filed use .value to the value inside the input field
    const depositField = document.getElementById('deposit-field');
    const newDepositAmountString = depositField.value;
    const newDepositAmount = parseFloat(newDepositAmountString)
    
    // console.log('Deposit amount:', depositAmount);

    // step 3: update the current deposit total
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString =depositTotalElement.innerText; 
    const previousDepositTotal = parseFloat(previousDepositTotalString)
    console.log(typeof previousDepositTotal)

    // step-4: add numbers to set  the total deposit
    const currentDeposit = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = currentDeposit;
    

    // step-5: get ballance current total
    const ballanceTotalElement = document.getElementById('balance-totalf');
    const previousBalanceTotalString = ballanceTotalElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);

    //step-6: calculate current total balance
    const currentBalanceTotal = previousBalanceTotal + newDepositAmount;
     // set the balance total
     ballanceTotalElement.innerText = currentBalanceTotal;
    // step-4: Clear the deposit field for the next input
    depositField.value = '';

});