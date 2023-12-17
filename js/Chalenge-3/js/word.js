const boldBtn = document.getElementById("bold-btn");
boldBtn.addEventListener("click", function () {
  document.execCommand("bold");
});

const italicBtn = document.getElementById("italic-btn");
italicBtn.addEventListener("click", () => {
  document.execCommand("italic");
});

const underlineBtn = document.getElementById("underline-btn");
underlineBtn.addEventListener("click", () => {
  document.execCommand("underline");
});

//**/ */ Align controler //***//// */

const btnLeft = document.getElementById("bton-left");
btnLeft.addEventListener("click", () => {
  const lefAlign = document.getElementById("content");
  lefAlign.style["text-align"] = "left";
});

const btnCenter = document.getElementById("bton-center");
btnCenter.addEventListener("click", () => {
  const centerAlign = document.getElementById("content");
  centerAlign.style["text-align"] = "center";
});

const btnRight = document.getElementById("btn-right");
btnRight.addEventListener("click", () => {
  const rightAlign = document.getElementById("content");
  rightAlign.style["text-align"] = "right";
});

const btnJustify = document.getElementById("btn-justify");
btnJustify.addEventListener("click", () => {
  const justifyAlign = document.getElementById("content");
  justifyAlign.style["text-align"] = "justify";
});

//***/ */ Color Picker///*** */
const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("input", () => {
  document.execCommand("forecolor", false, colorPicker.value);
});

//**/altter style */
