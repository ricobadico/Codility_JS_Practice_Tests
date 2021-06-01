/*
A string S consisting of N characters is considered to be properly nested if any of the following conditions is true:

S is empty;
S has the form "(U)" or "[U]" or "{U}" where U is a properly nested string;
S has the form "VW" where V and W are properly nested strings.
For example, the string "{[()()]}" is properly nested but "([)()]" is not.

Write a function:

function solution(S);

that, given a string S consisting of N characters, returns 1 if S is properly nested and 0 otherwise.

For example, given S = "{[()()]}", the function should return 1 and given S = "([)()]", the function should return 0, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..200,000];
string S consists only of the following characters: "(", "{", "[", "]", "}" and/or ")".
 */

// Take two. Right idea, but need to confirm at the end of the loop that all bracket pairs closed
// (ie, the stack is empty)
function solution(S) {
    // Create a stack structure for the brackets
    const stack = [];
    let size = 0;

    // Iterate through S, returning with 0 if given a closing bracket not corresponding
    // to the current top of the stack. If it does match, pop the top and do not push
    for (let i = 0; i < S.length; i ++) {
        // Check if opener, add to stack
        if (
            S[i] === "{"
            || S[i] === "["
            || S[i] === "(") {

            stack[size] = (S[i]);
            size ++;
        }
        // Check if immediate closer, remove open from stack
        else if (
            (S[i] === "}" && stack[size - 1] === "{")
            || (S[i] === "]" && stack[size - 1] === "[")
            || (S[i] === ")" && stack[size - 1] === "(")) {

            // Reducing size by one will in effect ignore/ later overwrite whatever values might be to
            // the right of it, so long as we any future iterates of the stack use size and not length
            size--;
        }
        // Otherwise invalid! We can exit
        else {
            return 0;
        }
    }
    // If we get here, we're good
    if (size == 0){
        return 1;
    }
    else {
        return 0;
    }
}