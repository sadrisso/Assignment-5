
document.getElementById("donation-btn").addEventListener("click", function ()
{
    showSectionById("donate-section");
});

document.getElementById("history-btn").addEventListener("click", function ()
{
    showSectionById("history-section");
});

document.getElementById("donate-noakhali-input-btn").addEventListener("click", function ()
{
    const noakhaliInputVal = getInputFieldValueById("donate-noakhali-input");
    const mainBalance = getTextFieldValueById("main-balance");
    const noakhaliAmonut = getTextFieldValueById("noakhali-amount");
    const newBalance = mainBalance - noakhaliInputVal;
    const noakhaliBalance = parseFloat(noakhaliAmonut) + parseFloat(noakhaliInputVal);


    if (mainBalance <= 0) {
        alert("Tk sob sesh vai");
        return;
    }

    if (noakhaliInputVal > 10) {
        alert("successfully donated")
        document.getElementById("main-balance").innerText = newBalance;
        document.getElementById("noakhali-amount").innerText = noakhaliBalance;
    }
    else {
        alert("Invalid Input")
    }

    document.getElementById("donate-noakhali-input").value =  "";

    const message = `You donate ${noakhaliInputVal}tk, Donate for Flood at Noakhali, Bangladesh`;
    console.log(message)

    const messageEle = document.createElement("div")
    messageEle.innerText = message;
    document.getElementById("history-section").appendChild(messageEle);
});


document.getElementById("donate-feni-input-btn").addEventListener("click", function ()
{
    const donationAmntFeni = getInputFieldValueById("donate-feni-input");
    const mainBalance = getTextFieldValueById("main-balance");
    const feniAmount = getTextFieldValueById("feni-amount");
    const feniBalance = parseFloat(feniAmount) + parseFloat(donationAmntFeni);

    const newBalance = mainBalance - donationAmntFeni;
    console.log(newBalance, feniBalance)


    if (mainBalance <= 0) {
        alert("Tk sob sesh vai");
        return;
    }

    if (donationAmntFeni > 10) {
        document.getElementById("main-balance").innerText = newBalance;
        document.getElementById("feni-amount").innerText = feniBalance;
    }
    else {
        alert("Amount is too low")
    }

    document.getElementById("donate-feni-input").value =  "";
});