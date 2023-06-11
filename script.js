const inputDOB = document.querySelector("#dob");
const checkBtn = document.querySelector("#btn-check-number");
const inputLuckyNum = document.querySelector("#lucky-number");
const resultPlaceholder = document.querySelector("#result");
const erroMsgPlaceholder = document.querySelector("#error-message")

checkBtn.addEventListener("click", () => {
    clearResult();
    clearErrorMessage();
    validateInputs()
})


function checkNumber(dob, luckyNum) {
    dob = dob.replaceAll("-", "");
    let dobSum = 0;
    for (let i = 0; i < dob.length; i++) {
        dobSum += Number(dob.charAt(i));
    }
    if (dobSum % luckyNum === 0)
        showResult("Your Birthday is Lucky 🙂")
    else
        showResult("Your Birthday is not Lucky 🙁")
}


function validateInputs() {
    let dob = inputDOB.value;
    let luckyNum = inputLuckyNum.value;
    if (dob === "" || luckyNum === "")
        showErrorMessage("Incorrect inputs provided please try again.");
    else {
        checkNumber(dob, luckyNum);
    }
}

function showResult(message) {
    resultPlaceholder.innerHTML = message;
}

function clearResult() {
    resultPlaceholder.innerHTML = ""
}

function showErrorMessage(message) {
    erroMsgPlaceholder.innerHTML = message;
}

function clearErrorMessage() {
    erroMsgPlaceholder.innerHTML = ""
}