let grid_size = {x: 8, y: 8};


const body = document.querySelector("body");
body.setAttribute("style", "display: flex;");

const grid = document.createElement("div");
grid.setAttribute("style", "display: flex;");
body.appendChild(grid);

for (let i = 0; i < grid_size.x; i++) {
    const grid = document.createElement("div");
    grid.setAttribute("style", "display: flex; flex-direction: column;");
    body.appendChild(grid);
    for (let i = 0; i < grid_size.y; i++) {
        const div = document.createElement("div");
        div.setAttribute("style", "background-color: green; padding: 32px; margin: 1px;");
        grid.appendChild(div);
    }
}

