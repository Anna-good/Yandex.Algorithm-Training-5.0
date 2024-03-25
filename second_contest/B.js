function Fish(n, k, m) {
    let maxProfit = 0;
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j <= i + k && j < n; j++) {
            let profit = m[j] - m[i];
            if (profit > maxProfit) {
                maxProfit = profit;
            }
        }
    }
    return maxProfit;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

let linesCount = 0
let lines = [];
const LINES_COUNT = 2;

rl.on('line', (line) => {
    if (line.length === 0) {
        return;
    }
    
    linesCount += 1;
    lines.push(line);
    
    if (linesCount !== LINES_COUNT) {
        return;
    }
    
    // ----- Start -----
    
    const line1 = lines[0];
    const line2 = lines[1];
    
    const numbers1 = line1.split(' ');
    const n = Number(numbers1[0]);
    const k = Number(numbers1[1]);
    
    const m = lines[1].split(' ').map((number) => {
    return Number(number);
  }).filter((_, index) => {
    return index < n;
  });
    
    const result = Fish(n,k,m); 
    
    // ----- Output -----
    console.log(result)
    
    // ----- End -----
    rl.close()
});


// console.log(Fish(4,2,[1, 3, 4, 5]))
// console.log(Fish(5, 2, [1, 2, 3, 4, 5]));
// console.log(Fish(5, 2, [5, 4, 3, 2, 1]));
