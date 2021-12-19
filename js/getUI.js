function getCardUI(vacation, vacations) {

    const outerDiv = document.createElement("div");
    outerDiv.className = "card";
    outerDiv.style.width = "18rem";

    if (vacation.isSelected) {
        outerDiv.classList.add("selected");
    }

    outerDiv.onclick = function() {
        const currentVacationState = vacation;
        currentVacationState.isSelected = !currentVacationState.isSelected;
        draw(vacations);
    }

    const img = document.createElement("img");
    img.src = vacation.image;
    img.className = "card-img-top p-3";

    const divBody = document.createElement("div");
    divBody.className = "card-body";

    const title = document.createElement("h5");
    title.innerText = vacation.location;
    title.className = "card-title";

    const deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("btn", "btn-danger");

    deleteButton.onclick = function() {
        const vacationIndex = getVacationById(vacation.id, vacations);
        if (vacationIndex === undefined) return;
        vacations.splice(vacationIndex, 1);
        localStorage.setItem(CONFIG.VACATIONS, JSON.stringify(vacations));
        draw(vacations);
    };


    // const sceneCard = document.createElement("div")
    // sceneCard.classList.add("scene scene--card");

    // const card = document.createElement("div")
    // card.classList.add("card");

    // const cardFace = document.createElement("div")
    // cardFace.classList.add("card__face card__face--front");

    // const cardBack = document.createElement("div")
    // cardBack.classList.add("card__face card__face--back");










    const flipCard = document.createElement("div")
    flipCard.classList.add("flip-card");

    const flipCardInner = document.createElement("div")
    flipCardInner.classList.add("flip-card-inner");

    const flipCardFront = document.createElement("div")
    flipCardFront.classList.add("flip-card-front");

    const flipCardBack = document.createElement("div")
    flipCardBack.classList.add("flip-card-back");

    const flipCardText = document.createElement("h1");
    flipCardText.innerText = vacation.location;





    // divBody.append(title);
    // outerDiv.append(img, divBody, deleteButton);

    // cardFace.append(outerDiv);

    // card.append(cardFace, cardBack);
    // sceneCard.append(card);


    // var card = document.querySelector('.card');
    // card.addEventListener( 'click', function() {
    // card.classList.toggle('is-flipped');
    // });



    flipCardBack.append(flipCardText);
    flipCardFront.append(outerDiv);
    flipCardInner.append(flipCardFront, flipCardBack);

    flipCard.append(flipCardInner);



    divBody.addEventListener("mouseenter", function() { deleteButton.style.visibility = "visible" });
    deleteButton.addEventListener("mouseenter", function() { deleteButton.style.visibility = "visible" });
    divBody.addEventListener("mouseleave", function() { deleteButton.style.visibility = "hidden" });

    deleteButton.style.visibility = "hidden";

    return flipCard;
}


function getVacationById(id, vacations) {

    const index = vacations.findIndex(function(currentVacation) {
        return currentVacation.id === id;
    });
    return index;

};