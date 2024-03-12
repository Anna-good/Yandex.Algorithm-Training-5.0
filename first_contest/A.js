function PaintTree(P,V,Q,M) {
    const unique = (start, end) => end - start + 1;
    const countV = unique(P - V, P + V);
    const countM = unique(Q - M, Q + M);    
    const countVM = Math.max(0, Math.min(P + V, Q + M) - Math.max(P - V, Q - M) + 1);    
    return countV + countM - countVM;
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
    const P = Number(numbers1[0]);
    const V = Number(numbers1[1]);
    
    const numbers2 = line2.split(' ');
    const Q = Number(numbers2[0]);
    const M = Number(numbers2[1]);
    
    const result = PaintTree(P,V,Q,M); 
    
    // ----- Output -----
    console.log(result)
    
    // ----- End -----
    rl.close()
});
