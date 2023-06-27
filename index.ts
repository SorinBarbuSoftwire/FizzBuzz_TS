// This is our main function
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const FIZZ = 0;
const BUZZ = 1;
const BANG = 2;
const BONG = 3;
const FEZZ = 4;
const REV = 5;

function fizzbuzz(n:number, rules:number[]): void {
    // Put your code here...
    // initial flags
    let flags: boolean[] = [false, false, false, false, false, false];
    // update flags based on received rules
    for (let i = 0; i < rules.length; i++) {
        if (0 <= rules[i] && rules[i] <= 5)
            flags[rules[i]] = true;
    }

    for (let i: number = 1; i <= n; i++) {
        let buzzWords: string[] = [];
        let resFinal: string = "";

        if (i % 11 === 0 && flags[BONG]) {
            buzzWords.push("Bong")
        } else {
            if (i % 7 === 0 && flags[BANG]) {
                if (i % 3 === 0 && flags[FIZZ])
                    buzzWords.push("Fizz");
                if (i % 5 === 0 && flags[BUZZ])
                    buzzWords.push("Buzz");
                buzzWords.push("Bang");
            } else {
                if (i % 3 === 0 && flags[FIZZ])
                    buzzWords.push("Fizz");
                if (i % 5 === 0 && flags[BUZZ])
                    buzzWords.push("Buzz");
            }
        }

        if (i % 13 === 0 && flags[FEZZ]) {
            let index:number;
            for (index = 0; index < buzzWords.length; index++) {
                if (buzzWords[index].indexOf("B") === 0)
                    break;
            }
            buzzWords.splice(index, 0, "Fezz");
        }

        if (i % 17 == 0 && flags[REV]) {
            buzzWords.reverse();
        }

        // concatenate the buzzwords
        for (let i: number = 0; i < buzzWords.length; i++) {
            resFinal += buzzWords[i];
        }

        // check if there are any buzzwords
        if (buzzWords.length === 0)
            console.log(i);
        else
            console.log(resFinal);
    }
}

fizzbuzz(255, [FIZZ, BUZZ, BANG, BONG, FEZZ, REV]);

let n: number;
let count: number;
rl.question("FIZZ = 0\nnBUZZ = 1\nBANG = 2\nBONG = 3\nFEZZ = 4\nREV = 5\nHow many numbers?\n", (answer) => {
    n = parseInt(answer);
    rl.close();
});

rl.question("How many buzz words?\n", (answer) => {
    count = parseInt(answer);
    rl.close();
});
