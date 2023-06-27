// This is our main function
import {resourceLimits} from "worker_threads";
import {beforeEach} from "node:test";

function fizzbuzz(): void {
    console.log("Hello, World!");
    // Put your code here...
    let index: number;
    for (let i: number = 1; i <= 255; i++) {
        let resStrs: string[] = [];
        let resStr: string = "";

        if (i % 11 === 0) {
            resStrs.push("Bong");
            if (i % 13 === 0) {
                resStrs.splice(0, 0, "Fezz");
            }
        } else {
            if (i % 7 !== 0 && i % 13 !== 0) {
                resStr = i.toString() + ": ";
            }

            if (i % 3 === 0) {
                resStrs.push("Fizz");
            }
            if (i % 5 === 0) {
                resStrs.push("Buzz");
            }
            if (i % 7 === 0) {
                resStrs.push("Bang");
            }
            if (i % 13 === 0) {
                index = -1;
                for (let i: number = 0; i < resStrs.length; i++) {
                    if (resStrs[i].indexOf("B") === 0) {
                        index = i;
                        break;
                    }
                }
                if (index != -1)
                    resStrs.splice(index, 0, "Fezz");
                else
                    resStrs.push("Fezz");
            }
        }

        if (i % 17 == 0)
            resStrs.reverse();

        for (let j:number = 0; j < resStrs.length; j++) {
            resStr += resStrs[j]
        }

        console.log(resStr)
    }
}

// Now, we run the main function:
fizzbuzz();