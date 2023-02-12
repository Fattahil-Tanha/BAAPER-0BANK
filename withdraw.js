document.getElementById('btn-withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const withdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(withdrawAmountString);
    
    
    // setting up the field 
  const previousWithdrawElement = document.getElementById('Withdraw-total');
  const previousWithdrawTotalString = previousWithdrawElement.innerText;
  const previousWithdrawAmount = parseFloat(previousWithdrawTotalString);

  

 const balanceTotalElement = document.getElementById('balance-total');
 const previousBalanceTotalString = balanceTotalElement.innerText;
 const previousBalanceTotal = parseFloat(previousBalanceTotalString);
 withdrawField.value = "";
 
 if(newWithdrawAmount > previousBalanceTotal){
    alert('baaper bank e eto taka nai');
    return;
 }
 
 const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
  previousWithdrawElement.innerText = currentWithdrawTotal;


const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
balanceTotalElement.innerText = newBalanceTotal;




})
