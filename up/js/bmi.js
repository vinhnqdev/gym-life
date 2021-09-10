const radioInputs = document.querySelectorAll(
  ".bmi__radio-fields input[type=radio]"
);

// Inputs
const kgInput = document.querySelector(".bmi__input-control .kgunit");
const cmInput = document.querySelector(".bmi__input-control .cmunit");
const ibsInput = document.querySelector(".bmi__input-control .ibsunit");
const feetUnit = document.querySelector(".bmi__input-control .feetunit");
const inchUnit = document.querySelector(".bmi__input-control .inchunit");

// Fields

const inputFields = document.querySelectorAll(".bmi__input-control");

// Button
const submitBtn = document.querySelector(".calculate__btn");

//result
const result = document.querySelector(".bmi__container--caculate__result");

radioInputs.forEach((radio) => {
  radio.addEventListener("click", function () {
    const currentinputField = document.querySelector(
      `div[data-form = ${radio.id}]`
    );
    inputFields.forEach((inputField) => {
      inputField.classList.remove("active");
    });
    currentinputField.classList.add("active");
  });
});

submitBtn.addEventListener("click", function () {
  radioInputs.forEach((radioInput) => {
    if (radioInput.checked && radioInput.id === "unit1") {
      calculateAlongMetrickUnit(kgInput, cmInput);
    }
    if (radioInput.checked && radioInput.id === "unit2") {
      calculateAlongImperialUnit(ibsInput, feetUnit, inchUnit);
    }
  });
});

function checkEmpty(...inputs) {
  let isEmpty = false;
  for (let i = 0; i < inputs.length; i++) {
    if (inputs[i].value === "") {
      isEmpty = true;
      break;
    }
  }
  return isEmpty;
}
function checkvalidContent(...inputs) {
  let reg = /^-?\d+\.?\d*$/;
  let isValid = true;
  for (let i = 0; i < inputs.length; i++) {
    if (!reg.test(inputs[i].value)) {
      isValid = false;
      break;
    }
  }
  return isValid;
}
function resetForm() {
  kgInput.value = "";
  cmInput.value = "";
  ibsInput.value = "";
  feetUnit.value = "";
  inchUnit.value = "";
}
function printResult(finalResult) {
  result.style.color = "#fff";
  if (finalResult < 18.5) {
    result.innerText = `Your BMI is: ${finalResult}, and weight status is: Underweight`;
  } else if (finalResult >= 18.5 && finalResult <= 24.99999) {
    result.innerText = `Your BMI is: ${finalResult}, and weight status is: Normal`;
  } else if (finalResult >= 25 && finalResult <= 29.99999) {
    result.innerText = `Your BMI is: ${finalResult}, and weight status is: Overweight`;
  } else {
    result.innerText = `Your BMI is: ${finalResult}, and weight status is: Obese`;
  }
  resetForm();
}
function calculateAlongMetrickUnit(kgInput, cmInput) {
  if (checkEmpty(kgInput, cmInput)) {
    result.style.color = "#ff0000";
    result.innerText = "Error: One or more fields are empty.";
    return;
  }
  if (!checkvalidContent(kgInput, cmInput)) {
    result.style.color = "#ff0000";
    result.innerText = "All fields value must be a number";

    return;
  }
  const kgValue = parseFloat(kgInput.value);
  const cmValue = parseFloat(cmInput.value);
  let finalResult = (kgValue / Math.pow(cmValue / 100, 2)).toFixed(2);
  printResult(finalResult);
}
function calculateAlongImperialUnit(ibsInput, feetUnit, inchUnit) {
  if (checkEmpty(ibsInput, feetUnit, inchUnit)) {
    result.style.color = "#ff0000";
    result.innerText = "Error: One or more fields are empty.";
    return;
  }
  if (!checkvalidContent(ibsInput, feetUnit, inchUnit)) {
    result.style.color = "#ff0000";
    result.innerText = "All fields value must be a number";
    return;
  }
  const ibsValue = parseFloat(ibsInput.value);
  const feetValue = parseFloat(feetUnit.value);
  const ichValue = parseFloat(inchUnit.value);
  console.log(Math.pow(feetValue * 12 + ichValue, 2));
  let finalResult = (
    (ibsValue / Math.pow(feetValue * 12 + ichValue, 2)) *
    703
  ).toFixed(2);
  printResult(finalResult);
}
