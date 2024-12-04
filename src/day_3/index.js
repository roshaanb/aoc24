const { inputToArray } = require("../../utils");
const lines = inputToArray(`${__dirname}/input.txt`);

part1 = () => {
  let total = 0;
  let re = /mul\(\d+,\d+\)/g;
  lines.forEach((line) => {
    let matches = line.match(re);
    matches.forEach((match) => {
      total +=
        parseInt(match.substring(4, match.indexOf(","))) *
        parseInt(match.substring(match.indexOf(",") + 1, match.length - 1));
    });
  });
  return total;
};

function checkMulAllowed(array, i) {
  for (let j = i; j > -1; j--) {
    if (array[j] === "don't()") {
      return false;
    }
    if (array[j] === "do()") {
      return true;
    }
  }
}

part2 = () => {
  let total = 0;
  let allMatches = ["do()"];
  let re = /mul\(\d+,\d+\)|do\(\)|don't\(\)/g;
  lines.forEach((line) => {
    let matches = line.match(re);
    matches.forEach((match) => {
      allMatches.push(match);
    });
  });
  allMatches.forEach((match, i) => {
    if (
      checkMulAllowed(allMatches, i) &&
      !["do()", "don't()"].includes(match)
    ) {
      total +=
        parseInt(match.substring(4, match.indexOf(","))) *
        parseInt(match.substring(match.indexOf(",") + 1, match.length - 1));
    }
  });
  return total;
};

console.time("Execution Time");
console.log(`Part 1: ${part1()}, Part 2: ${part2()}`);
console.timeEnd("Execution Time");
