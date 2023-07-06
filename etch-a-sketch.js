const body = document.querySelector("body");
body.setAttribute("style", "display: flex; gap: 16px;");

const grid = document.querySelector("#grid");
grid.setAttribute("style", "display: flex; gap: 0px;");

for (let i = 0; i < 8; i++) {
    const div = document.createElement("div");
    div.setAttribute("style", "background-color: green; padding: 32px; margin: 1px;");
    grid.appendChild(div);
}