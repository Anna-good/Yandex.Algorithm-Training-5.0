/**
3:2
6:7
1 - первая игра дома
// 0
************
 1:1
 2:2
 2 - первая игра в гостях
 // 1
******************
 3:2
 6:7
 2 - первая игра в гостях
 //1 
***************
3:3
6:6
1 - первая игра дома
// 1
*********************
0:2
0:3
1 - первая игра дома
//  5
********************
0:2
0:3
2  - первая игра гостях
// 6
********************
0:0
0:0
2  - первая игра гостях
// 1
********************
0:0
0:0
1  - первая игра гостях
// 1
*/


/**
********************
3:2
6:7
1 - первая игра дома
// 0
********************

0:2
0:3
1 - первая игра дома
//  5
********************



0:2
0:3
1 - первая игра дома
// 5

// -----------

5:2
0:5
1 - первая игра дома
// 3


1:2
2:3
1 - первая игра дома
// 2

1:2
3:6
2 - первая игра дома
// 6
 
4:2
0:3
1

1:3
5:3
1

:
:
1
3

3:4
2:3
1
3


4:3
0:3
2 - первая игра в гостях
// 3-2
*/

function Match(
    firstPlay_1, //4
    secondPlay_1, //0
    firstPlay_2,  // 3
    secondPlay_2, // 3
    where // 2
) {
    let firstTeam = firstPlay_1 + secondPlay_1; // 
    let secondTeam = firstPlay_2 + secondPlay_2; //

    if (firstTeam < secondTeam){
        if (where === 1){ // в гостях cейчас
            const diff = secondTeam - firstTeam; // 
            
            if (firstPlay_1 !== secondPlay_2 && secondPlay_1 + diff > firstPlay_2) {
                return diff;
            }
            
            return diff + 1;
        }
        if (where === 2){ // дома cейчас
            const diff = secondTeam - firstTeam;

            if (firstPlay_1 > secondPlay_2) {
                return diff;
            }
            return diff + 1;
        }
    }
    if (firstTeam > secondTeam) {
        return 0;
    }
    if (firstTeam === secondTeam){
        if (where === 1){
            if (secondPlay_1 > firstPlay_2) {
                return 0;
            } else {
                return 1;
            }
        }
        if (where === 2){
            if (firstPlay_1 > secondPlay_2){
                return 0;
            } else{
                return 1;
            }
        }
    }

}

const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,  terminal: false
});
let linesCount = 0
let lines = [];
const LINES_COUNT = 3;

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
    const line1 = lines[0]; // 0:0
    const line2 = lines[1]; // 0:0
    const line3 = lines[2]; // 1
    
    const firstPlay = line1.split(':'); // ['0', '0']
    const firstPlay_1 = Number(firstPlay[0]);
    const firstPlay_2 = Number(firstPlay[1]);

    const secondPlay = line2.split(':'); // ['0', '0']
    const secondPlay_1 = Number(secondPlay[0]);
    const secondPlay_2 = Number(secondPlay[1]);

    const where = Number(lines[2]);

    const result = Match(firstPlay_1, secondPlay_1, firstPlay_2, secondPlay_2, where);        
    // ----- Output -----
    console.log(result)
        // ----- End -----
    rl.close()
});
