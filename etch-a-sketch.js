const grid = document.querySelector("#grid");
const div = document.createElement("div");
const div1 = document.createElement("div");

grid.setAttribute("style", "display: flex;");
div.setAttribute("style", "background-color: green; padding: 16px; margin: 0;");
div1.setAttribute("style", "background-color: blue; padding: 16px; margin: 0;");
//div.textContent = "TEST";

grid.appendChild(div);
grid.appendChild(div1);
