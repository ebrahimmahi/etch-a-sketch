
const container = document.querySelector(".container");

const square = document.createElement("div");

const body = document.querySelector("body");
body.style.display = "flex";
body.style.alignItems = "center";
body.style.justifyContent = "center";

square.style.height = "150px";
square.style.width = "150px";


for(let i = 0; i < 16; i++){
    const clone = square.cloneNode(true);
    clone.addEventListener("mouseleave", ()=> clone.style.background = "blue");
    container.appendChild(clone)
}


container.style.display = "flex";
container.style.flexWrap = "wrap";
container.style.width = "600px";
container.style.border = "1px solid black";
