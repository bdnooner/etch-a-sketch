const rows = 100;
const container_height = window.innerWidth - 16;
const num_boxes = rows * rows;

const body = document.querySelector("body");
const container = document.createElement("div");
container.className = "container";
container.style.width = container_height + "px";
container.style.height = container_height + "px";
body.appendChild(container);

function createGrid(rows, num_boxes) {
  for (let i = 0; i < num_boxes; i++) {
    const div = document.createElement("div");
    div.className = "grid-box";
    div.style.width = container_height / rows + "px";
    div.style.height = container_height / rows + "px";

    console.log(div.style.width);

    container.appendChild(div);

    container.addEventListener("mouseover", (event) => {
      event.target.style.backgroundColor = "black";
    });
  }
}

createGrid(rows, num_boxes);

const button = document.querySelector("button");
button.addEventListener("click", (event) => {
    let userRows = prompt("How many rows/columns do you want to have?");
    container.replaceChildren();
});
