let square_grid = 8;
let grid_size = {x: square_grid, y: square_grid};
let pixel_size = 8;
let spacing = 1;
let color = "green";

function draw() {
    const body = document.querySelector("#grid-container");
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
            div.addEventListener("click", function () {
                this.style["background-color"] = "black";
            });
            div.setAttribute("style", `background-color: ${color}; padding: ${pixel_size}px; margin: ${spacing}px;`);
            grid.appendChild(div);
        }
    }
}

draw();

function adjustGridSize() {
    const slider = document.querySelector("#grid-slider");
    slider.oninput = function () {
        square_grid = this.value;
        console.log(square_grid);
    }
}

adjustGridSize();
