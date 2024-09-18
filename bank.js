const submitArea = document.getElementById("login-area");
const transactionArea = document.getElementById("transactionArea");
const login = document.getElementById("login");
const currentDeposit = document.getElementById("currentDeposit");
const currentWithdraw = document.getElementById("currentWithdraw");
const currentBalance = document.getElementById("currentBalance");
const depositAmount = document.getElementById("depositAmount");
const addDeposit = document.getElementById("addDeposit");
const withdrawAmount = document.getElementById("withdrawAmount");
const addWithdraw = document.getElementById("addWithdraw");

login.addEventListener("click", function () {
  submitArea.style.display = "none";
  transactionArea.style.display = "block";
});

addDeposit.addEventListener("click", function () {
  let deposit = Number(depositAmount.value);
  if (!isNaN(deposit)) {
    let nogodDeposit = Number(currentDeposit.innerText);
    const totalDeposit = deposit + nogodDeposit;
    console.log(totalDeposit);
    currentDeposit.innerText = totalDeposit;
    let prsentBalance = Number(currentBalance.innerText);
    currentBalance.innerText = deposit + prsentBalance;
    depositAmount.value = "";
  } else {
    alert("type number not dusra kuch ....lol");
    depositAmount.value = "";
  }
});

addWithdraw.addEventListener("click", function () {
  const presentWithdrawAmount = Number(withdrawAmount.value);
  const presentWithdraw = Number(currentWithdraw.innerText);
  const mainBalance = Number(currentBalance.innerText);
  if (presentWithdrawAmount < mainBalance) {
    const totalWithdraw = presentWithdrawAmount + presentWithdraw;

    currentWithdraw.innerText = totalWithdraw;
    //   console.log(typeof currentBalance.innerHTML);
    let currentBalanceNow = mainBalance - presentWithdrawAmount;
    currentBalance.innerText = currentBalanceNow;
    withdrawAmount.value = "";
  } else {
    alert("account me maal he ki nai ee to dekh...");
    withdrawAmount.value = "";
  }
});
