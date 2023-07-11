let square_grid = 8;
let grid_size = {x: square_grid, y: square_grid};
let pixel_size = 8;
let spacing = 0.5;
let color = "green";

function draw() {
    const grid_container = document.querySelector("#grid-container");
    grid_container.setAttribute("style", "display: flex;");

    for (let i = 0; i < grid_size.x; i++) {
        const grid = document.createElement("div");
        grid.setAttribute("style", "display: flex; flex-direction: column; flex-grow: 1;");
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

function adjustGridSize() {
    const slider_label = document.querySelector(".slider-label");
    const slider = document.querySelector(".grid-slider");
    const grid_container = document.querySelector("#grid-container");

    slider_label.textContent = `${slider.value} x ${slider.value}`;
    slider.oninput = function () {
        grid_size.x = this.value;
        grid_size.y = this.value;

        slider_label.textContent = `${grid_size.x} x ${grid_size.y}`;

        while (grid_container.hasChildNodes()) {
            grid_container.removeChild(grid_container.children[0]);
        }
        draw();
    }
}

draw();
adjustGridSize();
