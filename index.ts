// This is our main function
import {resourceLimits} from "worker_threads";

function fizzbuzz(): void {
    console.log("Hello, World!");
    // Put your code here...
    let resAux: string;
    for (let i: number = 1; i <= 100; i++) {
        resAux = "";
        console.log(i);
        if (i % 3 === 0) {
            resAux += "Fizz";
        }
        if (i % 5 === 0) {
            resAux += "Buzz";
        }
        if (resAux !== "") {
            console.log(resAux);
        }
    }
}

// Now, we run the main function:
fizzbuzz();