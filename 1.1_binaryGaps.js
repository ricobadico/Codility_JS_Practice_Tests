/*
A binary gap within a positive integer N is any maximal sequence of consecutive zeros that is surrounded by ones at both ends in the binary representation of N.

For example, number 9 has binary representation 1001 and contains a binary gap of length 2. The number 529 has binary representation 1000010001 and contains two binary gaps: one of length 4 and one of length 3. The number 20 has binary representation 10100 and contains one binary gap of length 1. The number 15 has binary representation 1111 and has no binary gaps. The number 32 has binary representation 100000 and has no binary gaps.

Write a function:

class Solution { public int solution(int N); }

that, given a positive integer N, returns the length of its longest binary gap. The function should return 0 if N doesn't contain a binary gap.

For example, given N = 1041 the function should return 5, because N has binary representation 10000010001 and so its longest binary gap is of length 5. Given N = 32 the function should return 0, because N has binary representation '100000' and thus no binary gaps.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..2,147,483,647].
 */

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