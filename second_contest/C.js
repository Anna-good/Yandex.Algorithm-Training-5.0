function rope(N, L) {
    let max = L[0];
    let sum = L[0];
    for (let i = 1; i < L.length; i++) {
        sum += L[i];
        if (max < L[i]) {
            max = L[i];
        }
    }
    if (sum - max < max) {
        return max - (sum - max);
    } else {
        return max + (sum - max);
    }
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
    const N = Number(numbers1[0]);

    const L = lines[1].split(' ').map((number) => {
        return Number(number);
    }).filter((_, index) => {
        return index < N;
    });

    const result = rope(N, L);

    // ----- Output -----
    console.log(result)

    // ----- End -----
    rl.close()
});

rl.on('close', () => {
    process.exit(0); // Завершение программы с нулевым кодом возврата
});
