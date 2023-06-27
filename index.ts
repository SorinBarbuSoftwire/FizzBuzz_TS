// This is our main function
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

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
            if (i % 7 === 0 && flags[BuzzWords.BANG]) {
                if (i % 3 === 0 && flags[BuzzWords.FIZZ]) {
                    buzzWords.push("Fizz");
                }
                if (i % 5 === 0 && flags[BuzzWords.BUZZ]) {
                    buzzWords.push("Buzz");
                }
                buzzWords.push("Bang");
            } else {
                if (i % 3 === 0 && flags[BuzzWords.FIZZ]) {
                    buzzWords.push("Fizz");
                }
                if (i % 5 === 0 && flags[BuzzWords.BUZZ]) {
                    buzzWords.push("Buzz");
                }
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

let count: number;
const rules: number[] = [];
rl.question("How many numbers?\n", (answer1) => {
    rl.question("Select buzzwords [y/n]:\nFIZZ?\n", (answer2) => {
        rl.question("BUZZ?\n", (answer3) => {
            rl.question("BANG?\n", (answer4) => {
                rl.question("BONG?\n", (answer5) => {
                    rl.question("FEZZ?\n", (answer6) => {
                        rl.question("REV?\n", (answer7) => {
                            count = parseInt(answer1);
                            if (answer2 === "y") {
                                rules.push(BuzzWords.FIZZ);
                            }
                            if (answer3 === "y") {
                                rules.push(BuzzWords.BUZZ);
                            }
                            if (answer4 === "y") {
                                rules.push(BuzzWords.BANG);
                            }
                            if (answer5 === "y") {
                                rules.push(BuzzWords.BONG);
                            }
                            if (answer6 === "y") {
                                rules.push(BuzzWords.FEZZ);
                            }
                            if (answer7 === "y") {
                                rules.push(BuzzWords.REV);
                            }

                            fizzbuzz(count, rules);
                            rl.close();
                        });
                    });
                });
            });
        });
    });
});