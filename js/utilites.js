function getInputValueById(inputId) {
  const depositInput = document.getElementById(inputId);
  const inputIdString = depositInput.value;
  const newDiposit = parseFloat(inputIdString);
  return newDiposit;
}

function getTextValueById(dipositId) {
  const DipositTotal = document.getElementById(dipositId);
  const dipositTotalString = DipositTotal.innerText;
  const previousDiposit = parseFloat(dipositTotalString);
  return previousDiposit;
}

function setElementValueById(elementId, newValue) {
  const element = document.getElementById(elementId);
  element.innerText = newValue;
}
