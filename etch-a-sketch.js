let square_grid = 8;
let grid_size = {x: square_grid, y: square_grid};
let pixel_size = 1;
let gridline = 0.5;
let color = "green";

function draw() {
    const grid_container = document.querySelector("#grid-container");
    grid_container.setAttribute("style", "display: flex;");

    while (grid_container.hasChildNodes()) {
        grid_container.removeChild(grid_container.children[0]);
    }

    for (let i = 0; i < grid_size.x; i++) {
        const grid = document.createElement("div");
        grid.setAttribute("style", "display: flex; flex-direction: column; flex-grow: 1;");
        grid_container.appendChild(grid);
        for (let i = 0; i < grid_size.y; i++) {
            const div = document.createElement("div");
            div.classList.add("grid");

            div.addEventListener("toggle-gridline", () => {
                let grid_margin = div.style;

                switch (grid_margin["margin"].toString()){
                    case "0.5px":
                        grid_margin["margin"] = "0px";
                        break;
                    
                    case "0px":
                        grid_margin["margin"] = "0.5px";
                        break;
                    
                }
            });

            div.addEventListener("mousemove", () => {
                div.style["background-color"] = "black";
            });

            div.setAttribute(
                "style", 
                `
                    background-color: ${color}; 
                    padding: ${pixel_size}px; 
                    margin: ${gridline}px; 
                    display: flex; 
                    flex-grow: 1;
                `
            );

            grid.appendChild(div);
        }
    }
}

function adjustGridSize() {
    const slider_label = document.querySelector(".slider-label");
    const slider = document.querySelector(".grid-slider");
    const button = document.querySelector(".button");

    slider_label.textContent = `Gridsize: ${slider.value} x ${slider.value}`;
    slider.oninput = function () {
        grid_size.x = this.value;
        grid_size.y = this.value;
        slider_label.textContent = `Gridsize: ${grid_size.x} x ${grid_size.y}`;
    }

    button.addEventListener("click", draw);
}

function gridlineToggle() {
    const button_gridline = document.querySelector(".button-gridline");
    let button_color = button_gridline.style;

    button_gridline.addEventListener("click", function () {
        const event = new Event("toggle-gridline");
        const div = document.getElementsByClassName("grid");

        switch (gridline) {
            case 0.5:
                gridline = 0;
                button_color["background-color"] = "red";
                break;
            
            case 0:
                gridline = 0.5;
                button_color["background-color"] = "green";
                break;
        }
        
        Array.from(div).forEach((i) => {
            i.dispatchEvent(event);
        })
    });
}

adjustGridSize();
gridlineToggle();
