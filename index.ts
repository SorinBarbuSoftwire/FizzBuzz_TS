// This is our main function
import {resourceLimits} from "worker_threads";

function fizzbuzz(): void {
    console.log("Hello, World!");
    // Put your code here...
    let resStr: string;
    for (let i: number = 1; i <= 100; i++) {
        resStr = "";

        if (i % 11 === 0) {
            process.stdout.write("Bong");
        }
        else {
            if (i % 7 !== 0) {
                process.stdout.write(i.toString() + ": ");
            }

            if (i % 3 === 0) {
                resStr += "Fizz";
            }
            if (i % 5 === 0) {
                resStr += "Buzz";
            }
            if (i % 7 === 0) {
                resStr += "Bang"
            }
            if (resStr !== "") {
                process.stdout.write(resStr);
            }
        }

        process.stdout.write("\n");
    }
}

// Now, we run the main function:
fizzbuzz();