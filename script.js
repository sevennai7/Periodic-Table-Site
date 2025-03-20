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

function createTable() {
    const tableDiv = document.getElementById("periodic-table");
    tableDiv.innerHTML = ""; // Clear before adding elements

    elements.forEach(element => {
        let el = document.createElement("div");
        el.classList.add("element");
        el.innerText = element.symbol;
        el.onclick = () => showElementInfo(element);
        tableDiv.appendChild(el);
    });
}

function showElementInfo(element) {
    const infoDiv = document.getElementById("element-info");
    infoDiv.innerHTML = `<strong>${element.name} (${element.symbol})</strong><br>Atomic Number: ${element.number}<br>${element.fact}`;
    infoDiv.classList.remove("hidden");
}

function getRandomElement() {
    let randomElement = elements[Math.floor(Math.random() * elements.length)];
    showElementInfo(randomElement);
}

function toggleSettings() {
    let settingsMenu = document.getElementById("settings-menu");
    settingsMenu.style.display = (settingsMenu.style.display === "block") ? "none" : "block";
}

function changeTheme() {
    let theme = document.getElementById("theme-select").value;
    document.body.classList.toggle("dark-mode", theme === "dark");
    localStorage.setItem("theme", theme);
}

function changeLayout() {
    let layout = document.getElementById("layout-select").value;
    console.log(`Table layout changed to: ${layout}`); // Future layout logic here
}

function toggleChaos() {
    let chaos = document.getElementById("chaos-mode").checked;
    console