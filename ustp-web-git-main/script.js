let name = "Alfranz Veloz";
let age = 18;
const handler = "@veloz.alfranzgab";

let year = "1st Year";


// Function to update card details

const updateCardDetails = () => {
    document.querySelector(".name").textContent = name;
    document.querySelector(".handler").textContent = handler;
    document.querySelector(".institution").textContent = institution;
    document.getElementById("age").textContent = age;
    document.getElementById("course").textContent = course;
    document.getElementById("year").textContent = year;
    document.getElementById("motto").textContent = motto;
}

// Event listener for the button to update card details
document.getElementById("updateButton").addEventListener("click", () => {
    updateCardDetails();
    alert("Card details updated!");
})