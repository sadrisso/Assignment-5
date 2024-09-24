

function getInputFieldValueById (id) {
    return document.getElementById(id).value;
}

function getTextFieldValueById (id) {
    return document.getElementById(id).innerText;
}


function showSectionById (id)
{
    document.getElementById("donate-section").classList.add("hidden");
    document.getElementById("history-section").classList.add("hidden");
    document.getElementById(id).classList.remove("hidden");

}