function app() {
    let bill, people, tip, totalPerPerson, tipPerPerson, totalText, tipText;
    bill = parseInt(document.querySelector("#bill").value);

    people = parseInt(document.querySelector("#people").value);

    tip = parseInt(document.querySelector("input[name=tip]:checked").value);

    totalText = document.querySelector('#totalText');
    tipText = document.querySelector('#tipText');

    if (document.querySelector("#tip6").checked === true) {
        tip = parseInt(customButton.value);
    }

    totalPerPerson = (bill + bill * tip / 100) / people;
    tipPerPerson = bill * tip / 100 / people

    totalText.innerHTML = totalPerPerson;
    tipText.innerHTML = tipPerPerson;
}

let customButton = document.querySelector("#custom");
customButton.onclick = () => {
    document.querySelector("#tip6").checked = true;
    app();
}

let resetButton = document.querySelector("#button");
resetButton.onclick = () => {
    document.querySelector("form").reset();
}