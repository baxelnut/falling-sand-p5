import p5 from "p5";
import "./style.css";

const sketch = (p) => {
  p.make2DArray = (cols, rows, defaultValue = null) =>
    Array.from({ length: cols }, () => Array(rows).fill(defaultValue));

  let grid, colorGrid;
  let cols, rows;
  let resolution = 2;
  let hueValue = 0;

  p.setup = function () {
    p.createCanvas(800, 400);
    p.colorMode(p.HSB, 360, 255, 255);
    cols = Math.floor(p.width / resolution);
    rows = Math.floor(p.height / resolution);
    grid = p.make2DArray(cols, rows, 0);
    colorGrid = p.make2DArray(cols, rows, null);
  };

  p.mouseDragged = function () {
    let col = Math.floor(p.mouseX / resolution);
    let row = Math.floor(p.mouseY / resolution);

    if (col >= 0 && col < cols && row >= 0 && row < rows) {
      // Random particle count and offset for X and Y axis
      let particleCount = Math.floor(Math.random() * 100) + 80;
      for (let n = 0; n < particleCount; n++) {
        let offsetX = Math.floor(Math.random() * 16) - 8;
        let offsetY = Math.floor(Math.random() * 16) - 8;

        let newCol = col + offsetX;
        let newRow = row + offsetY;

        if (newCol >= 0 && newCol < cols && newRow >= 0 && newRow < rows) {
          // Mark cell as occupied & assign its color
          grid[newCol][newRow] = 1;
          colorGrid[newCol][newRow] = hueValue + 5;
        }
      }

      hueValue += 0.5;
      if (hueValue > 300) {
        // Reset value
        hueValue = 0;
      }
    }
  };

  p.draw = function () {
    p.background(0);

    let nextGrid = p.make2DArray(cols, rows, 0);
    let nextColorGrid = p.make2DArray(cols, rows, null);

    for (let i = 0; i < cols; i++) {
      for (let j = rows - 1; j >= 0; j--) {
        if (grid[i][j] == 1) {
          // If cell is occupied
          let below = j + 1 < rows ? grid[i][j + 1] : 1;
          let left = i > 0 ? grid[i - 1][j + 1] : 1;
          let right = i < cols - 1 ? grid[i + 1][j + 1] : 1;

          let sandColor = colorGrid[i][j];

          if (below == 0) {
            // Move sand down if space is available
            nextGrid[i][j + 1] = 1;
            nextColorGrid[i][j + 1] = sandColor;
          } else if (left == 0 && right == 0) {
            // Randomly move left or right if both are free
            let move = Math.random() < 0.5 ? -1 : 1;
            nextGrid[i + move][j + 1] = 1;
            nextColorGrid[i + move][j + 1] = sandColor;
          } else if (left == 0) {
            // Move left if only left is free
            nextGrid[i - 1][j + 1] = 1;
            nextColorGrid[i - 1][j + 1] = sandColor;
          } else if (right == 0) {
            // Move right if only right is free
            nextGrid[i + 1][j + 1] = 1;
            nextColorGrid[i + 1][j + 1] = sandColor;
          } else {
            // Stay in place if no movement is possible
            nextGrid[i][j] = 1;
            nextColorGrid[i][j] = sandColor;
          }
        }
      }
    }

    grid = nextGrid;
    colorGrid = nextColorGrid;

    // Draw the sand particles
    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        if (grid[i][j] == 1) {
          p.noStroke();
          p.fill(colorGrid[i][j], 255, 255);
          p.square(i * resolution, j * resolution, resolution);
        }
      }
    }
  };
};

new p5(sketch);
