let submitButton = $("#form-submit-btn");
let displayTable = $("#display-body");

let nameInput = $("#project-name-input");
let typeInput = $("#project-type-input");
let rateInput = $("#hourly-rate-input");
let dateInput = $("#due-date-input");

let timer = $("#timer");

timer.text("Current date and time is: "+moment().format("YYYY-MM-DD hh:mm:ss a"));
setInterval(() => {
    timer.text("Current date and time is: "+moment().format("YYYY-MM-DD hh:mm:ss a"));
}, 1000);

function removeButton(event) {
    let button = event.target;
    $(event.target).parent().parent().remove();
}

function addTableObject(name, type, rate, dueDate) {
    let tr = $("<tr>");
    let nameObj = $('<th scope="row">');
    let typeObj = $("<td>");
    let rateObj = $("<td>");
    let dateObj = $("<td>");
    let daysleftObj = $("<td>");
    let earningsObj = $("<td>");
    let daysLeft = Math.abs(moment().diff(moment(dueDate), "days"));

    let buttontd = $("<td>");
    let button = $("<button>");

    buttontd.append(button);
    button.text("Delete");
    button.addClass("delete-item-btn");

    nameObj.text(name);
    typeObj.text(type);
    rateObj.text(rate);
    dateObj.text(moment(dueDate).format("MMM Do YYYY"));
    daysleftObj.text(daysLeft);
    earningsObj.text(rate*8*daysLeft);

    tr.append(nameObj);
    tr.append(typeObj);
    tr.append(rateObj);
    tr.append(dateObj);
    tr.append(daysleftObj);
    tr.append(earningsObj);
    tr.append(buttontd);

    displayTable.append(tr);

    console.log(tr);

    return tr;
}

function getInputs() {
    let projectName = nameInput.value
    let projectType = typeInput.value
    let rate = rateInput.value
    let dueDate = dateInput.value

    console.log(projectName);
    console.log(projectType);
    console.log(rate);
    console.log(dueDate);

    addTableObject(projectName, projectType, rate, dueDate);
}

submitButton.on("click", getInputs);
displayTable.on('click', '.delete-item-btn', removeButton);

$(function() {
    $( "#due-date-input" ).datepicker();
});