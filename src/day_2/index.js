const { to } = require("mathjs");
const { inputToArray } = require("../../utils");
const lines = inputToArray(`${__dirname}/input.txt`);
let reports = lines
  .map((line) => line.split(" "))
  .map((line) => line.map((num) => parseInt(num)));

function maxDiffAndDuplicateCheck(array) {
  let polarity = array[0] > array[1] ? -1 : 1;
  for (let i = 0; i < array.length - 1; i++) {
    if (
      ![polarity, polarity * 2, polarity * 3].includes(array[i + 1] - array[i])
    )
      return false;
  }
  return true;
}

part1 = () => {
  let total = 0;
  reports.forEach((report) => {
    if (maxDiffAndDuplicateCheck(report)) {
      total++;
    }
  });
  return total;
};

part2 = () => {
  let total = 0;
  reports.forEach((report) => {
    if (maxDiffAndDuplicateCheck(report)) {
      total++;
    } else {
      for (let i = 0; i < report.length; i++) {
        let newReport = report.slice(0, i).concat(report.slice(i + 1));
        if (maxDiffAndDuplicateCheck(newReport)) {
          total++;
          break;
        }
      }
    }
  });
  return total;
};

console.time("Execution Time");
console.log(`Part 1: ${part1()}, Part 2: ${part2()}`);
console.timeEnd("Execution Time");
