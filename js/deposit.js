document.getElementById("btn-diposit").addEventListener("click", function () {
  const newDipositValue = getInputValueById("new-diposit");

  const input = document.getElementById("new-diposit");
  input.value = "";

  if (isNaN(newDipositValue)) {
    alert("please input a valid Number");
    return;
  } else if (newDipositValue <= 0) {
    alert("Please Valid Number");
    return;
  }

  const preiviousDipositValue = getTextValueById("diposit-total");
  const totalDiposit = preiviousDipositValue + newDipositValue;
  setElementValueById("diposit-total", totalDiposit);

  const balanceTotal = getTextValueById("balance-total");
  const totalBalance = balanceTotal + newDipositValue;

  setElementValueById("balance-total", totalBalance);
});
