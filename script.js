const div = document.createElement("div")
div.classList.add("button-container")

const button = document.createElement("button")
button.textContent = "create grid"
button.classList.add("button")

button.addEventListener("click", promptUser)

div.appendChild(button)

document.body.prepend(div)

const container = document.querySelector("#container")
container.classList.add("container")


function createGrid(squaresPerSide) {
  container.innerHTML = '';
  const squareSize = `calc(100% / ${squaresPerSide})`;
  
  for (let i = 0; i < squaresPerSide * squaresPerSide; i++) {
    const square = document.createElement("div")
    square.style.width = squareSize;
    square.style.height = squareSize;
    square.classList.add("square")
    square.style.backgroundColor = "red"

    square.addEventListener("mouseenter", (e) => {
      console.log(e)
      square.style.backgroundColor = "blue"
    })

    container.appendChild(square)
  }
}

function promptUser() {
  let squaresPerSide;
  do {
      squaresPerSide = prompt('Enter the number of squares per side (max 100):', 16);
      if (squaresPerSide === null) return; // Exit if the user cancels the prompt
      squaresPerSide = parseInt(squaresPerSide);
  } while (isNaN(squaresPerSide) || squaresPerSide < 1 || squaresPerSide > 100);

  createGrid(squaresPerSide);
}



