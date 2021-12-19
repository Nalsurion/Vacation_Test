const DOM = {
    form: null,
    image: null,
    location: null,
    vacationsContainer: null,
    body: null,
};

const CONFIG = { VACATIONS: "vacations" };
const state = { vacations: [] };

function init() {
    

    DOM.form = document.querySelector("#addVacationForm");

    DOM.image = document.getElementById("image");
    DOM.location = document.getElementById("location");
    DOM.vacationsContainer = document.querySelector("#vacationsContainer");

    const buttonAdd = document.querySelector("#addButton");
    buttonAdd.addEventListener("click", addVacation);

    const buttonRemove = document.querySelector("#removeAllButton");
    buttonRemove.addEventListener("click", removeAllVacation);

    const buttonRemoveSelected = document.querySelector("#removeSelectedVacetion");
    buttonRemoveSelected.addEventListener("click", removeSelectedVacetion);

    try {
        const vacationsString = localStorage.getItem(CONFIG.VACATIONS);
        const vacations = JSON.parse(vacationsString);
        if (!vacations) return;
        state.vacations = vacations;
    } catch {}
    draw(state.vacations);
}

init();

function draw(vacations) {

    DOM.vacationsContainer.innerHTML = "";
    for (let index = 0; index < vacations.length; index++) {
        const vacationCard = getCardUI(vacations[index], vacations);
        if (!vacationCard) return;
        DOM.vacationsContainer.append(vacationCard);
    }
}

function bodyCollor(){
    const body = document.getElementById("body");
    body.style.background = "red";
    
    console.log("iam working");

}



function addVacation() {

    const locationValue = DOM.location.value;
    const imageValue = DOM.image.value;
    const vacation = getVacation(imageValue, locationValue);
    state.vacations.push(vacation);
    localStorage.setItem(CONFIG.VACATIONS, JSON.stringify(state.vacations));
    draw(state.vacations);

    // setTimeout(removeAllForTimeOut, 10000);
}

function removeAllVacation() {
    DOM.vacationsContainer.innerHTML = "";
    localStorage.clear();
    state.vacations = []

}

function removeAllForTimeOut() {
    DOM.vacationsContainer.innerHTML = "";
    // localStorage.clear();
    // state.vacations = []

}

function removeSelectedVacetion() {

    const vacations = state.vacations.filter(function(currentVacation) {
        return currentVacation.isSelected === false;
    });

    state.vacations = vacations;
    localStorage.setItem(CONFIG.VACATIONS, JSON.stringify(state.vacations));

    draw(state.vacations);
    console.log(index);
    // state.vacations

}


setTimeout(bodyCollor, 1000);

// hey 