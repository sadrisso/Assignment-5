
document.getElementById("donation-btn").addEventListener("click", function ()
{
    window.location.href = "/index.html"
})

document.getElementById("history-btn").addEventListener("click", function ()
{
    window.location.href = "/history.html"
})

document.getElementById("donate-noakhali-input-btn").addEventListener("click", function ()
{
    const noakhaliInputVal = getInputFieldValueById("donate-noakhali-input");
    const mainBalance = getTextFieldValueById("main-balance");
    const noakhaliAmonut = getTextFieldValueById("noakhali-amount");
    const newBalance = mainBalance - noakhaliInputVal;
    const noakhaliBalance = parseFloat(noakhaliAmonut) + parseFloat(noakhaliInputVal);
    console.log(mainBalance, noakhaliInputVal, noakhaliBalance)

    if (noakhaliInputVal > 10) {
        document.getElementById("main-balance").innerText = newBalance;
        document.getElementById("noakhali-amount").innerText = noakhaliBalance;
    }
    else {
        alert("Invalid Input")
    }
})