function app() {
    let bill, people, tip, totalPerPerson, tipPerPerson;
    bill = parseInt(document.querySelector("#bill").value);

    people = parseInt(document.querySelector("#people").value);

    tip = parseInt(document.querySelector("input[name=tip]:checked").value);

    if (document.querySelector("#tip6").checked === true) {
        tip = parseInt(customButton.value);
    }


    console.log("Tip", tip);
    console.log("Bill", bill);
    console.log("People", people);

    totalPerPerson = (bill + bill * tip / 100) / people;
    tipPerPerson = bill * tip / 100 / people

    console.log("Total", totalPerPerson);
    console.log("tipPerPerson", tipPerPerson);
}

let customButton = document.querySelector("#custom");
customButton.onclick = () => {
    document.querySelector("#tip6").checked = true;
    app();
}