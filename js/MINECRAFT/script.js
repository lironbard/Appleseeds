// -- World Level -- \\

const game = document.querySelector(`#world`);
const gameObject = new Map();

function TheGameMatrix() {
  let gameMatrix = [];
  for (let col = 0; col < 25; col++) {
    gameMatrix[col] = [];

    for (let row = 0; row < 30; row++) {
      let myDiv = document.createElement(`div`);
      myDiv.classList.add(`box`);
      myDiv.classList.add(`sky-box`);
      game.appendChild(myDiv);
      gameObject.set(`${col},${row}`, { myDiv });
    }
  }
}
TheGameMatrix();

function initGround() {
    for (let i = 0; i < 30; i++) {
      for (let j = 21; j < 25; j++) {
        let ground = gameObject.get(`${j},${i}`);
        ground.myDiv.classList.remove(`sky-box`);
        ground.myDiv.classList.add(`ground-box`);
      }
    }
  }
  initGround();
  function initGroundTop() {
    for (let i = 0; i < 30; i++) {
      for (let j = 20; j < 21; j++) {
        let ground = gameObject.get(`${j},${i}`);
        ground.myDiv.classList.remove(`sky-box`);
        ground.myDiv.classList.add(`ground-top-box`);
      }
    }
  }
  initGroundTop();
  
  function initTree() {
    let row = 20;
    let col = 6;
    const treeMatrix = [
      [0, 0, 0, 1, 1, 1, 0, 0, 0],
      [0, 0, 0, 1, 1, 3, 0, 0, 0],
      [0, 1, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 3, 1, 1, 3, 1, 0],
      [1, 3, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 3, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 3, 1, 3, 1],
      [1, 3, 1, 1, 1, 1, 1, 1, 1],
      [0, 1, 1, 2, 1, 3, 1, 1, 0],
      [0, 1, 1, 2, 2, 1, 1, 0, 0],
      [0, 0, 0, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 2, 2, 2, 0, 0, 0],
      [0, 0, 0, 2, 2, 2, 0, 0, 0],
    ];
  
    for (let i = 0; i < treeMatrix.length; i++) {
      for (let j = 0; j < treeMatrix[0].length; j++) {
        let gameO = gameObject.get(`${col},${row}`);
        if (treeMatrix[i][j] === 1) {
          gameO.myDiv.classList.remove(`sky-box`);
          gameO.myDiv.classList.add(`grass-box`);
        }
        if (treeMatrix[i][j] === 2) {
          gameO.myDiv.classList.remove(`sky-box`);
          gameO.myDiv.classList.add(`wood-box`);
        } else if (treeMatrix[i][j] === 3) {
          gameO.myDiv.classList.remove(`sky-box`);
          gameO.myDiv.classList.add(`apple-box`);
        }
        row++;
      }
      col++;
      row = 20;
    }
  }
  initTree();
  function initStone() {
    let row = 1;
    let col = 12;
    const stoneMatrix = [
      [0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0],
      [0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0],
      [0, 1, 1, 0, 0, 0, 0, 0, 1, 1, 2, 0],
      [0, 1, 1, 2, 0, 0, 0, 0, 1, 1, 2, 2],
      [2, 1, 1, 2, 2, 0, 0, 0, 1, 1, 2, 2],
    ];
  
    for (let i = 0; i < stoneMatrix.length; i++) {
      for (let j = 0; j < stoneMatrix[0].length; j++) {
        let gameO = gameObject.get(`${col},${row}`);
        if (stoneMatrix[i][j] === 1) {
          gameO.myDiv.classList.remove(`sky-box`);
          gameO.myDiv.classList.add(`stone-box`);
        } else if (stoneMatrix[i][j] === 2) {
          gameO.myDiv.classList.remove(`sky-box`);
          gameO.myDiv.classList.add(`grass-box`);
        }
        row++;
      }
      col++;
      row = 1;
    }
  }
  initStone();
  
  function initCloud() {
    let row = 2;
    let col = 1;
    const cloudMatrix = [
      [0, 0, 0, 0, 0, 0, 1, 2, 1, 1, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 1, 1, 2, 1, 1, 1, 0, 0, 0, 0],
      [0, 0, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 0],
      [0, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 1, 1, 1, 1, 1],
      [1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 0],
      [0, 0, 0, 1, 1, 1, 1, 2, 2, 1, 1, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 2, 1, 1, 0, 0, 0, 0, 0],
    ];
  
    for (let i = 0; i < cloudMatrix.length; i++) {
      for (let j = 0; j < cloudMatrix[0].length; j++) {
        let gameO = gameObject.get(`${col},${row}`);
        if (cloudMatrix[i][j] === 1) {
          gameO.myDiv.classList.remove(`sky-box`);
          gameO.myDiv.classList.add(`cloud-box`);
        } else if (cloudMatrix[i][j] === 2) {
          gameO.myDiv.classList.remove(`sky-box`);
          gameO.myDiv.classList.add(`light-box`);
        }
        row++;
      }
      col++;
      row = 2;
    }
  }
  initCloud();
  