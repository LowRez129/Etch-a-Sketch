let square_grid = 8;
let grid_size = {x: square_grid, y: square_grid};
let pixel_size = 8;
let spacing = 1;
let color = "green";

function adjustGridSize() {
    const slider = document.querySelector("#grid-slider");
    const grid_container = document.querySelector("#grid-container");
    
    slider.oninput = function () {
        grid_size.x = this.value;
        grid_size.y = this.value;

        while (grid_container.hasChildNodes()) {
            grid_container.removeChild(grid_container.children[0]);
        }
        draw();
    }
}


function draw() {
    const grid_container = document.querySelector("#grid-container");
    grid_container.setAttribute("style", "display: flex;");

    const grid = document.createElement("div");
    grid.setAttribute("style", "display: flex;");
    grid_container.appendChild(grid);

    for (let i = 0; i < grid_size.x; i++) {
        const grid = document.createElement("div");
        grid.setAttribute("style", "display: flex; flex-direction: column;");
        grid_container.appendChild(grid);
        for (let i = 0; i < grid_size.y; i++) {
            const div = document.createElement("div");
            div.addEventListener("mousemove", function () {
                this.style["background-color"] = "black";
            });
            div.setAttribute("style", `background-color: ${color}; padding: ${pixel_size}px; margin: ${spacing}px;`);
            grid.appendChild(div);
        }
    }
}

draw();
adjustGridSize();
