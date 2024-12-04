const { inputToArray } = require("../../utils");
const lines = inputToArray(`${__dirname}/input.txt`);
let matrix = lines.map((line) => line.split(""));

let validDirections = [
  [-1, 0],
  [-1, 1],
  [0, 1],
  [1, 1],
  [1, 0],
  [1, -1],
  [0, -1],
  [-1, -1]
];


function checkWordIsInRange(i, j, di, dj) {
  return !(
    i + 3 * di < 0 ||
    i + 3 * di > lines.length - 1 ||
    j + 3 * dj < 0 ||
    j + 3 * dj > lines.length - 1
  );
}

function findXMASs(matrix, i, j) {
  let XMASs = 0;
  for (let [di, dj] of validDirections) {
    if (
      checkWordIsInRange(i, j, di, dj) &&
      matrix[i][j] +
        matrix[i + di][j + dj] +
        matrix[i + 2 * di][j + 2 * dj] +
        matrix[i + 3 * di][j + 3 * dj] ===
        "XMAS"
    ) {
      XMASs++;
    }
  }
  return XMASs;
}

part1 = () => {
  let totalXMASs = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      totalXMASs += findXMASs(matrix, i, j);
    }
  }
  return totalXMASs;
};

part2 = () => {
  let totalCrossMASs = 0;
  for (let i = 0; i < matrix.length - 2; i++) {
    for (let j = 0; j < matrix.length - 2; j++) {
      if (
        ["MMASS", "MSAMS", "SMASM", "SSAMM"].includes(
          matrix[i][j] +
            matrix[i + 2][j] +
            matrix[i + 1][j + 1] +
            matrix[i][j + 2] +
            matrix[i + 2][j + 2]
        )
      ) {
        totalCrossMASs++;
      }
    }
  }
  return totalCrossMASs;
};

console.time("Execution Time");
console.log(`Part 1: ${part1()}, Part 2: ${part2()}`);
console.timeEnd("Execution Time");
