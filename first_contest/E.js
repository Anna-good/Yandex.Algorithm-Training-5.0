function Startup(n, k, d) {
    let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
    let res = n;
    // let count = 0;

    function checkNumber(res) {
        for (let num = 0; num < numbers.length; num++) {
            let finishRes = res * 10 + numbers[num];
            if (finishRes % k === 0) {
                return finishRes;
            }
        }
        return null;
    }

    let result = checkNumber(res);
    if (result !== null) {
        return String(result) + "0".repeat(d - 1);
    }
    else {
        return "-1";
    }
}

// console.log(Startup(21, 108, 2));
// console.log(Startup(21, 108, 1));
// console.log(Startup(5, 12, 4));
// console.log(Startup(2, 1, 3));
// console.log(Startup(29420920, 98069736, 69929));


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});
let linesCount = 0
let lines = [];
const LINES_COUNT = 1;

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
    
    const numbers1 = line1.split(' ');
    const n = Number(numbers1[0]);
    const k = Number(numbers1[1]);
    const d = Number(numbers1[2]);
    
    const result = Startup(n, k, d);        
    // ----- Output -----
    console.log(result)
    // ----- End -----
    rl.close()
});
