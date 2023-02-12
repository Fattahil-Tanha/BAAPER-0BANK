// add event listener to the deposit button
document.getElementById('btn-deposit').addEventListener('click', function(){

    // console.log("deposit button clicked");

// step 2: get the deposit amount from the deposit field

   const depositField=document.getElementById('deposit-field');

//    step-3: take the input from the input field and put it in a variable

   const newDepositAmountString = depositField.value;
   const newDepositAmount = parseFloat(newDepositAmountString);

//    step-3: get the current deposit total

// for non input and text area ...use innertext to get the text

     const depositTotalElement = document.getElementById('deposit-total');

     const previousDepositTotalString = depositTotalElement.innerText;
     const previousDepositTotal = parseFloat(previousDepositTotalString);

    //  add numbers to the totoal deposit
     const currentDeposit = previousDepositTotal + newDepositAmount;
     depositTotalElement.innerText = currentDeposit;

    // step -5: get balance current total


    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceTotalElement.innerText;
    const previousBalance = parseFloat(previousBalanceTotalString);



    // step-6; calculate total balance 
    const currenBalanceTotal = previousBalance + newDepositAmount;
    // set  the balance total 
    balanceTotalElement.innerText = currenBalanceTotal;
    //  claer the deposit field
    depositField.value= "";
    
})