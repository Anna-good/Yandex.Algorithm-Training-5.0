function MinButtons(n){
    let count = 0;
    
    for (let i = 0; i < n.length; i++){
        if (n[i] <= 2){
            count += n[i];
        }
        if (n[i] === 3) {
            count += 2;
        }
        if (n[i] >= 4) {
            if (n[i] % 4 === 0) {
                count += n[i] / 4;
            }
            if (n[i] % 4 === 3) {
                count += Math.floor(n[i] / 4) + 2;
            }
            if (n[i] % 4 === 1) {
                count += Math.floor(n[i] / 4) + 1;
            }
            if (n[i] % 4 === 2) {
                count += Math.floor(n[i] / 4) + 2;
            }
        }
    }
    
    return count;
}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,  terminal: false
});
let linesCount = 0
let lines = [];
let LINES_COUNT = undefined;

rl.on('line', (line) => {
    if (line.length === 0) {
        return;
    }    
    
    if (!LINES_COUNT) {
        LINES_COUNT = Number(line);
        
        return;
    }

    lines.push(Number(line));
    
    if (lines.length !== LINES_COUNT) {
        return;
    }

    const result = MinButtons(lines);     
    // ----- Output -----    
    console.log(result)
        // ----- End -----
    rl.close()
});
