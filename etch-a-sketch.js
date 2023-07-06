const grid = document.querySelector("#grid");

grid.setAttribute("style", "display: flex; gap: 16px;");

for (let i = 0; i < 8; i++) {
    const div = document.createElement("div");
    const div1 = document.createElement("div");
    div.setAttribute("style", "background-color: green; padding: 16px; margin: 0;");
    grid.appendChild(div);
}