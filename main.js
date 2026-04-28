
const body = document.querySelector("body")
body.style.display = "flex"
body.style.flexDirection = "column"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.textAlign = "center"

const input = document.querySelector(".input")

const header = document.createElement("h3")
header.textContent = "Enter Number of Squares Per Side: (less than 100)"
input.appendChild(header)

const inputBox = document.createElement("input")
inputBox.id = "box-number"
input.appendChild(inputBox)

const btn = document.createElement("button")
btn.textContent = "Enter"
btn.style.marginBottom = "10px"
input.appendChild(btn)

const container = document.querySelector(".container")
container.style.width = "500px"
container.style.height = "500px"
container.style.border = "1px solid black"
container.style.display = "flex"
container.style.flexWrap = "wrap"

let num;
btn.addEventListener("click", () => {
    container.innerHTML = ""
    num = Number(inputBox.value)
    if(!num || num <= 0 || num > 100){
        header.textContent = "Please enter a value less than or equal to 100!"
        return
    }
    inputBox.value = ""
    let size = 500 / num
    
    const box = document.createElement("div")
    box.classList.add("box")
    box.style.height = `${size}px`
    box.style.width = `${size}px`
    
    for(let i = 0; i < num * num; i++){
        const boxes = box.cloneNode(true)
        container.appendChild(boxes)
        boxes.addEventListener("mouseover", () => {
            let r = Math.floor(Math.random() * 256)
            let g = Math.floor(Math.random() * 256)
            let b = Math.floor(Math.random() * 256)
            boxes.style.background = `rgba(${r}, ${g}, ${b})`
        }) 
    }
})





