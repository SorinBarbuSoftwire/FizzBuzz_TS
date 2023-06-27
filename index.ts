// This is our main function
import * as rl from 'readline-sync';

enum BuzzWords {
    FIZZ,
    BUZZ,
    BANG,
    BONG,
    FEZZ,
    REV
}

function fizzbuzz(n:number, rules:number[]): void {
    // Put your code here...
    // initial flags
    let flags: boolean[] = [false, false, false, false, false, false];
    // update flags based on received rules
    rules.forEach(rule => {
        if (0 <= rule && rule <= 5)
            flags[rule] = true;
    })

    for (let i: number = 1; i <= n; i++) {
        let buzzWords: string[] = [];
        let resFinal: string = "";

        if (i % 11 === 0 && flags[BuzzWords.BONG]) {
            buzzWords.push("Bong")
        } else {
            if (i % 3 === 0 && flags[BuzzWords.FIZZ]) {
                buzzWords.push("Fizz");
            }
            if (i % 5 === 0 && flags[BuzzWords.BUZZ]) {
                buzzWords.push("Buzz");
            }
            if (i % 7 === 0 && flags[BuzzWords.BANG]) {
                buzzWords.push("Bang");
            }
        }

        if (i % 13 === 0 && flags[BuzzWords.FEZZ]) {
            let index:number;
            for (index = 0; index < buzzWords.length; index++) {
                if (buzzWords[index].indexOf("B") === 0) {
                    break;
                }
            }
            buzzWords.splice(index, 0, "Fezz");
        }

        if (i % 17 == 0 && flags[BuzzWords.REV]) {
            buzzWords.reverse();
        }

        // concatenate the buzzwords
        resFinal = buzzWords.join('');

        // check if there are any buzzwords
        if (buzzWords.length === 0) {
            console.log(i);
        }
        else {
            console.log(resFinal);
        }
    }
}

let count: number = parseInt(rl.question("How many numbers?\n"));
const rules: number[] = [];

if (rl.question("Fizz? [y/n] ") === "y") {
    rules.push(BuzzWords.FIZZ);
}
if (rl.question("Buzz? [y/n] ") === "y") {
    rules.push(BuzzWords.BUZZ);
}
if (rl.question("Bang? [y/n] ") === "y") {
    rules.push(BuzzWords.BANG);
}
if (rl.question("Bong? [y/n] ") === "y") {
    rules.push(BuzzWords.BONG);
}
if (rl.question("Feez? [y/n] ") === "y") {
    rules.push(BuzzWords.FEZZ);
}
if (rl.question("Rev? [y/n] ") === "y") {
    rules.push(BuzzWords.REV);
}

fizzbuzz(count, rules);