function app () {
    let bill, tip, people, tipPerPerson, totalPerPerson;

    bill = document.querySelector("#bill").value;

    if(customButton.checked===true) {
        tip = document.querySelector("#custom").value;
    } else {
        tip = document.querySelector('input[name = tip]:checked').value;
    }

   
    people = document.querySelector("#people").value;

    console.log(bill, tip, people);


    
    
}

let customButton;
customButton = document.querySelector('input[name=custom]');

customButton.onclick = function() {
    
    customButton.checked = true;
    console.log(customButton.checked);
}

