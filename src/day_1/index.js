const { inputToArray } = require("../../utils");
const lines = inputToArray(`${__dirname}/input.txt`);

part1 = () => {
  let [total, first, second] = [0, [], []];
  lines.forEach((line) => {
    first.push(line.split("   ")[0]);
    second.push(line.split("   ")[1]);
  });
  first = first.sort();
  second = second.sort();
  for (let i = 0; i < first.length; i++) {
    total += Math.abs(first[i] - second[i]);
  }
  return total;
};

part2 = () => {
  let [total, first, firstKV, second] = [0, [], {}, []];
  lines.forEach((line) => {
    first.push(line.split("   ")[0]);
    second.push(line.split("   ")[1]);
  });
  second.forEach((num) => {
    if (first.includes(num)) {
      Object.keys(firstKV).includes(num) ? firstKV[num]++ : (firstKV[num] = 1);
    }
  });
  for (let i = 0; i < first.length; i++) {
    if (firstKV[first[i]]) {
      total += parseInt(firstKV[first[i]]) * first[i];
    }
  }
  return total;
};

console.time("Execution Time");
console.log(`Part 1: ${part1()}, Part 2: ${part2()}`);
console.timeEnd("Execution Time");
