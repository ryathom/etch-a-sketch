// Objects
const grid = document.querySelector('.grid');

const regen = document.querySelector('.regen');
regen.addEventListener('click', regenerateGrid);


// Functions
function populateGrid(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      const pixel = document.createElement('div');
  
      pixel.classList.add('pixel');
      pixel.style.width= (480/n) + 'px';
      pixel.style.height= (480/n) + 'px';
      pixel.addEventListener('mouseover', fillPixel);
  
      grid.appendChild(pixel);
    }
  }
}

function fillPixel() {
  console.log('alert');
  this.classList.add('filled');
}

function regenerateGrid() {
  let res = parseInt(prompt("Choose a vertical resolution from 1 to 100:", "16"));

  // Clear grid
  while(grid.firstChild) {
    grid.removeChild(grid.lastChild);
  }

  populateGrid(res);
}

// Main
let resolution = 16

populateGrid(resolution);