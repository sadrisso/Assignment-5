
document.getElementById("donation-btn").addEventListener("click", function ()
{
    showSectionById("donate-section");
    document.getElementById("history-btn").classList.remove("bg-[#B4F461]")
    document.getElementById("donation-btn").classList.add("bg-[#B4F461]")
});

document.getElementById("history-btn").addEventListener("click", function ()
{
    showSectionById("history-section");
    document.getElementById("history-btn").classList.add("bg-[#B4F461]")
    document.getElementById("donation-btn").classList.remove("bg-[#B4F461]")
});



// Noakhali donation
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
        alert("Amount is too low")
    }

    document.getElementById("donate-noakhali-input").value =  "";

    const message = `You donate ${noakhaliInputVal}tk, Donate for Flood at Noakhali, Bangladesh`;
    const messageEle = document.createElement("div")
    messageEle.innerText = message;
    document.getElementById("history-section").appendChild(messageEle);
});



// Feni donation
document.getElementById("donate-feni-input-btn").addEventListener("click", function ()
{
    const donationAmntFeni = getInputFieldValueById("donate-feni-input");
    const mainBalance = getTextFieldValueById("main-balance");
    const feniAmount = getTextFieldValueById("feni-amount");
    const feniBalance = parseFloat(feniAmount) + parseFloat(donationAmntFeni);
    const newBalance = mainBalance - donationAmntFeni;


    if (mainBalance <= 0) {
        alert("Tk sob sesh vai");
        return;
    }

    if (donationAmntFeni > 10) {
        alert("successfully donated")
        document.getElementById("main-balance").innerText = newBalance;
        document.getElementById("feni-amount").innerText = feniBalance;
    }
    else {
        alert("Amount is too low")
    }

    document.getElementById("donate-feni-input").value =  "";

    const mesage = `You donate ${donationAmntFeni}tk, Donate for Flood Relief in Feni,Bangladesh`;
    const messageEl = document.createElement("div")
    messageEl.innerText = mesage
    document.getElementById("history-section").appendChild(messageEl);
});



// Quota donation
document.getElementById("donate-quota-input-btn").addEventListener("click", function () 
{
    const quotaDonateAmount = getInputFieldValueById("donate-quota-input");
    const mainBalance = getTextFieldValueById("main-balance");
    const quotaAmount = getTextFieldValueById("quota-amount");
    const newBalance = mainBalance - quotaDonateAmount;
    const quotaBalance = parseFloat(quotaAmount) + parseFloat(quotaDonateAmount);

    if (mainBalance <= 0) {
        alert("Tk sob ses vai")
    }

    if (quotaDonateAmount > 10) {
        alert("successfully donated")
        document.getElementById("main-balance").innerText = newBalance;
        document.getElementById("quota-amount").innerText = quotaBalance;
    }
    else {
        alert("Amount is too low");
    }

    document.getElementById("donate-quota-input").value = "";

    const message = `You donate ${quotaDonateAmount}tk, Aid for Injured in the Quota Movement`;
    const messageEl = document.createElement("p");
    messageEl.innerText = message;
    document.getElementById("history-section").appendChild(messageEl);
})


document.getElementById("blog-btn").addEventListener("click", function ()
{
    window.location.href = "/blog.html";
})

