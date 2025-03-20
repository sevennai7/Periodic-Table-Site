document.addEventListener("DOMContentLoaded", () => {
    console.log("JavaScript loaded!");
    
    // Debugging alert (remove later)
    alert("JavaScript is working!");

    createTable();
    applySavedSettings();
});

// Elements list
const elements = [
    { number: 1, symbol: "H", name: "Hydrogen", fact: "The most abundant element in the universe!" },
    { number: 2, symbol: "He", name: "Helium", fact: "Makes your voice sound funny!" },
    { number: 3, symbol: "Li", name: "Lithium", fact: "Used in rechargeable batteries!" },
    { number: 4, symbol: "Be", name: "Beryllium", fact: "Light but super strong metal." },
    { number: 5, symbol: "B", name: "Boron", fact: "Found in bulletproof vests!" },
    { number: 6, symbol: "C", name: "Carbon", fact: "The basis of all known life." },
    { number: 7, symbol: "N", name: "Nitrogen", fact: "Makes up 78% of Earth's atmosphere." },
    { number: 8, symbol: "O", name: "Oxygen", fact: "Essential for breathing." },
    { number: 9, symbol: "F", name: "Fluorine", fact: "Used in toothpaste!" },
    { number: 10, symbol: "Ne", name: "Neon", fact: "Glows in neon signs!" }
];

// Create periodic table grid
function createTable() {
    const tableDiv = document.getElementById("periodic-table");
    tableDiv.innerHTML = ""; 

    elements.forEach(element => {
        let el = document.createElement("div");
        el.classList.add("element");
        el.innerText = element.symbol;
        el.onclick = () => showElementInfo(element);
        tableDiv.appendChild(el);
    });

    console.log("Table created!");
}

// Show element info
function showElementInfo(element) {
    const infoDiv = document.getElementById("element-info");
    infoDiv.innerHTML = `<strong>${element.name} (${element.symbol})</strong><br>Atomic Number: ${element.number}<br>${element.fact}`;
    infoDiv.classList.remove("hidden");
}

// Random Element
function getRandomElement() {
    let randomElement = elements[Math.floor(Math.random() * elements.length)];
    showElementInfo(randomElement);
}

// Settings Menu Toggle
function toggleSettings() {
    let settingsMenu = document.getElementById("settings-menu");
    settingsMenu.style.display = (settingsMenu.style.display === "block") ? "none" : "block";
}

// Change Theme
function changeTheme() {
    let theme = document.getElementById("theme-select").value;
    document.body.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);
}

// Apply Saved Settings
function applySavedSettings() {
    let savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
        document.body.classList.toggle("dark-mode", savedTheme === "dark");
        document.getElementById("theme-select").value = savedTheme;
    }
}