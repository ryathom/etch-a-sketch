// Objects
const grid = document.querySelector('.grid');

// Functions
function populateGrid(n) {
  for (let i = 0; i < n; i++) {
    const pixel = document.createElement('div');

    pixel.classList.add('pixel');
    pixel.addEventListener('mouseover', fillPixel);

    grid.appendChild(pixel);
  }
}

function fillPixel() {
  console.log('alert');
  this.classList.add('filled');
}

// Main
let resolution = 16*16

populateGrid(resolution);