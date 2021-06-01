/*
A string S consisting of N characters is called properly nested if:

S is empty;
S has the form "(U)" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, string "(()(())())" is properly nested but string "())" isn't.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if string S is properly nested and 0 otherwise.

For example, given S = "(()(())())", the function should return 1 and given S = "())", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..1,000,000];
string S consists only of the characters "(" and/or ")".
 */
function solution(S) {
    // Create a stack to hold incoming brackets
    const bracketStack = [];
    let size = 0;

    // Loop over string
    for (let i = 0; i < S.length; i++) {
        // If open bracket, add to stack
        if (S[i] === "("){
            bracketStack[size] = "(";
            size ++;
        }
        // If creates immediate pair, pop stack
        else if (S[i] === ")" && bracketStack[size-1] === "(") {
            size--;
        }
        // Otherwise invalid, return 0
        else {
            return 0;
        }
    }

    // After loop, ensure no properly nested strings (nothing on stack)
    if (size === 0) return 1;
    else return 0;
}