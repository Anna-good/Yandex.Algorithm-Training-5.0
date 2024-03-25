function Chess(field){
    let blocked = new Set();
    for (let i = 0; i < field.length; i++) {
        for (let j = 0; j < field[i].length; j++) {
            if (field[i][j] === 'R') {
                for (let x = i - 1; x >= 0; x--) {
                    if (field[x][j] !== '*') break;
                    blocked.add(`${x}${j}`);
                }
                for (let x = i + 1; x < field.length; x++) {
                    if (field[x][j] !== '*') break;
                    blocked.add(`${x}${j}`);
                }
                for (let y = j - 1; y >= 0; y--) {
                    if (field[i][y] !== '*') break;
                    blocked.add(`${i}${y}`);
                }
                for (let y = j + 1; y < field[i].length; y++) {
                    if (field[i][y] !== '*') break;
                    blocked.add(`${i}${y}`);
                }
                blocked.add(`${i}${j}`);
            }

            if (field[i][j] === 'B') {
                for (let x = i - 1, y = j - 1; x >= 0 && y >= 0; x--, y--) {
                    if (field[x][y] !== '*') break;
                    blocked.add(`${x}${y}`);
                }
                for (let x = i + 1, y = j + 1; x < field.length && y < field[i].length; x++, y++) {
                    if (field[x][y] !== '*') break;
                    blocked.add(`${x}${y}`);
                }
                for (let x = i - 1, y = j + 1; x >= 0 && y < field[i].length; x--, y++) {
                    if (field[x][y] !== '*') break;
                    blocked.add(`${x}${y}`);
                }
                for (let x = i + 1, y = j - 1; x < field.length && y >= 0; x++, y--) {
                    if (field[x][y] !== '*') break;
                    blocked.add(`${x}${y}`);
                }
                blocked.add(`${i}${j}`);
            }
        }
    }
    return 64 - blocked.size;
}


const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    terminal: false
});

let linesCount = 0;
let lines = [];
const LINES_COUNT = 8;

rl.on('line', (line) => {
    if (line.length === 0) {
        return;
    }

    linesCount += 1;
    lines.push(line);

    if (linesCount !== LINES_COUNT) {
        return;
    }

    const board = lines.slice(0, 8);
    const result = Chess(board);
    console.log(result);
    rl.close();
});


// console.log(Chess([
//     '********',
//     '********',
//     '*R******',
//     '********',
//     '********',
//     '********',
//     '********',
//     '********',
// ]))          ////// 49
  
// console.log(Chess([
//     '********',
//     '********',
//     '******B*',
//     '********',
//     '********',
//     '********',
//     '********',
//     '********',
// ]))     ////////////////////   54
 
// console.log(Chess([
//     '********',
//     '*R******',
//     '********',
//     '*****B**',
//     '********',
//     '********',
//     '********',
//     '********',
// ]))               //////// 40


// console.log(Chess([
//     '********',
//     '***B****',
//     '**BRB***',
//     '***B****',
//     '********',
//     '********',
//     '********',
//     '********',
// ]))               //////// 41
 
