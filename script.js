let userCard = document.querySelector(".user-card");

let emailInput = document.querySelector(".email-input");
let userEmail = document.querySelector(".user-email");
let validEmailMessage = document.querySelector(".valid-email-message");

let firstNameInput = document.querySelector(".first-name-input");
let userFirstName = document.querySelector(".user-first-name");

let lastNameInput = document.querySelector(".last-name-input");
let userLastName = document.querySelector(".user-last-name");

let locationInput = document.querySelector(".location-input");
let userLocation = document.querySelector(".user-location");
let locationIcon = document.querySelector(".location-icon")

let phoneInput = document.querySelector(".phone-input");
let userPhone = document.querySelector(".user-phone");
let phoneIcon = document.querySelector(".phone-icon");

let saveButton = document.querySelector(".save-button");

let showCard = () => {
    if(
        emailInput.value.trim() === "" && 
        firstNameInput.value.trim() === "" && 
        lastNameInput.value.trim() === "" && 
        locationInput.value.trim() === "" && 
        phoneInput.value.trim() === ""
    ) {
        userCard.style.display = "none";
    } else {
        userCard.style.display = "block";
    }
};

let updateUserEmail = () => {
    userEmail.innerText = emailInput.value;
    if (emailInput.value.length < 5) {
        emailInput.style.borderColor = "rgb(177, 31, 31)";
        validEmailMessage.style.display = "block";
    } else {
        emailInput.style.borderColor = "black";
        validEmailMessage.style.display = "none";
    }

    if(emailInput.value.trim() === "") {
        validEmailMessage.style.display = "none";
    }
};

let updateFirstName = () => {
    userFirstName.innerText = firstNameInput.value;
};

let updateLastName = () => {
    userLastName.innerText = lastNameInput.value;
};

let updateLocation = () => {
    userLocation.innerText = locationInput.value;
    if(locationInput.value.trim() === "") {
        locationIcon.style.display = "none";
    } else {
        locationIcon.style.display = "block";
    }
};

let updatePhone = () => {
    userPhone.innerText = phoneInput.value;
    if(phoneInput.value.trim() === "") {
        phoneIcon.style.display = "none";
    } else {
        phoneIcon.style.display = "block";
    }
};

let saveModifications = () => {
    emailInput.disabled = true;
    firstNameInput.disabled = true;
    lastNameInput.disabled = true;
    locationInput.disabled = true;
    phoneInput.disabled = true;
};

emailInput.addEventListener("input", updateUserEmail);
emailInput.addEventListener("input", showCard);

firstNameInput.addEventListener("input", updateFirstName, showCard);
firstNameInput.addEventListener("input", showCard);

lastNameInput.addEventListener("input", updateLastName, showCard);
lastNameInput.addEventListener("input", showCard);

locationInput.addEventListener("input", updateLocation, showCard);
locationInput.addEventListener("input", showCard);

phoneInput.addEventListener("input", updatePhone, showCard);
phoneInput.addEventListener("input", showCard);

saveButton.addEventListener("click", saveModifications);
