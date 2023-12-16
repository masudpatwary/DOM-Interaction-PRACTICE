//** */ next Chalenge //** */

document.getElementById("btn-apply").addEventListener("click", function () {
  const tokenInput = document.getElementById("token-inout");
  const tokenChackValidite = tokenInput.value;
  tokenInput.value = "";
  if (tokenChackValidite === "DISCOUNT30") {
    const discountPrice = getElementValueById("before-regular-price");
    setElementValueById("before-regular-price", discountPrice);
    
  } else {
    alert("Incurrect Token Number");
    return;
  }
});
