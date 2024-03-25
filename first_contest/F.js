function Mathematic(n, a) {
  const s = [];
  let first_odd = -1;
  let count_odd = a.every(i => i % 2 !== 0) ? n : a[0] % 2;

  if (a.every(i => i % 2 !== 0)) {
    for (let i = 0; i < n - 1; i++) {
      s[i] = 'x';
    }
    return s.join('');
  }

  for (let i = 0; i < n - 1; i++) {
    if ((a[i] + a[i + 1]) % 2 === 0) {
      s[i] = 'x';
    } else {
      s[i] = '+';
      if (a[i + 1] % 2 !== 0) {
        count_odd++;
      }
    }
    if (first_odd === -1 && a[i] % 2 !== 0) {
      first_odd = i;
    }
  }

  if (count_odd % 2 === 1) {
    return s.join('');
  } else {
    s[first_odd] === '+' ? s[first_odd] = 'x' : s[first_odd] = '+';
    return s.join('');
  }
}

const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let linesCount = 0;
let lines = [];
let LINES_COUNT = 2;

rl.on('line', (line) => {
  if (line.length === 0) {
    return;
  }
  
  lines.push(line);
  
  if (lines.length !== LINES_COUNT) {
    return;
  }
  
  const n = Number(lines[0]);
  const a = lines[1].split(' ').map((number) => {
    return Number(number);
  }).filter((_, index) => {
    return index < n;
  });
  
  const result = Mathematic(n, a);
  console.log(result);
  
  rl.close();
});
