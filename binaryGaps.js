const solution = function(n){
  // Declare var for highest gap, init to 0
    let biggestGap = 0;
    let counter = 0;
  // Get binary representation of int
    const nBinary = n.toString(2); // convert to string rep of binary

  // Iterate through binary, declare counter of consec 0s
    for(let digit of nBinary){
    // On finding 1, compare counter to highestGap, update gap if needed, reset counter to 0
        if(digit === "1"){
            if(counter > biggestGap){
                biggestGap = counter;
            }
            counter = 0;
        }
    // On finding 0, increment counter
        else if(digit === "0"){
            counter++;
        }
    }
 // return highest gap
    return biggestGap
};

let answer = solution(1041);
console.log(answer);