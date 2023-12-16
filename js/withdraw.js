document.getElementById("btn-withdraw").addEventListener("click", function () {
  const newWithdraw = getInputValueById("withdraw-new");

  const input = document.getElementById("withdraw-new");
  input.value = "";

  if (isNaN(newWithdraw)) {
    alert("Please input a Valid Number");
    return;
  } else if (newWithdraw <= 0) {
    alert("Please Valid Number");
    return;
  }

  const previousWithdraw = getTextValueById("withdraw-total");
  const previousBalance = getTextValueById("balance-total");

  const totalWithdraw = previousWithdraw + newWithdraw;
  const CurrentBalance = previousBalance - newWithdraw;

  setElementValueById("balance-total", CurrentBalance);
  setElementValueById("withdraw-total", totalWithdraw);
});
