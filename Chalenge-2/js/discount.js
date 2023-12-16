function getElementValueById(price) {
  const regularPrice = document.getElementById(price);
  const regularPriceString = regularPrice.innerText;
  const priceIs = parseFloat(regularPriceString);
  const discount = 30;
  const discountPrice = priceIs - (priceIs * discount) / 100;
  regularPrice.innerText = discountPrice;
  return regularPrice;
}

function setElementValueById(elementId, newValue) {
  const element = document.getElementById(elementId);
  element.inner = newValue;
}

//** */ Handler //** */

document.getElementById("btn-discount").addEventListener("click", function () {
  const currentPrice = getElementValueById("regular-price");
  setElementValueById("regular-price", currentPrice);
});

