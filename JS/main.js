const showInputBtn = document.getElementById("showInputBtn");

showInputBtn.addEventListener("click", () => {
    const userInput = window.prompt("Please enter a code:");
    if (userInput !== null) {
        console.log("User Input: " + userInput);
    }
});