/*
A DNA sequence can be represented as a string consisting of the letters A, C, G and T, which correspond to the types of successive nucleotides in the sequence. Each nucleotide has an impact factor, which is an integer. Nucleotides of types A, C, G and T have impact factors of 1, 2, 3 and 4, respectively. You are going to answer several queries of the form: What is the minimal impact factor of nucleotides contained in a particular part of the given DNA sequence?

The DNA sequence is given as a non-empty string S = S[0]S[1]...S[N-1] consisting of N characters. There are M queries, which are given in non-empty arrays P and Q, each consisting of M integers. The K-th query (0 ≤ K < M) requires you to find the minimal impact factor of nucleotides contained in the DNA sequence between positions P[K] and Q[K] (inclusive).

For example, consider string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
The answers to these M = 3 queries are as follows:

The part of the DNA between positions 2 and 4 contains nucleotides G and C (twice), whose impact factors are 3 and 2 respectively, so the answer is 2.
The part between positions 5 and 5 contains a single nucleotide T, whose impact factor is 4, so the answer is 4.
The part between positions 0 and 6 (the whole string) contains all nucleotides, in particular nucleotide A whose impact factor is 1, so the answer is 1.
Write a function:

function solution(S, P, Q);

that, given a non-empty string S consisting of N characters and two non-empty arrays P and Q consisting of M integers, returns an array consisting of M integers specifying the consecutive answers to all queries.

Result array should be returned as an array of integers.

For example, given the string S = CAGCCTA and arrays P, Q such that:

    P[0] = 2    Q[0] = 4
    P[1] = 5    Q[1] = 5
    P[2] = 0    Q[2] = 6
the function should return the values [2, 4, 1], as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
M is an integer within the range [1..50,000];
each element of arrays P, Q is an integer within the range [0..N − 1];
P[K] ≤ Q[K], where 0 ≤ K < M;
string S consists only of upper-case English letters A, C, G, T.
 */

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // This one stumped me to provide an efficient solution... surely there's a better way
    // than having to re-loop over sections already queried, but I'm not sure how to store that
    // data in any way that's more efficient than reviewing the slice.. you could make a map
    // of already queried ranges and set all of their min values to that amount... but as range
    // sizes differ, so will the relative smallest impact. Boo.

    // Init result array and pSums array
    const result = [];
    // const pSums = [0];
    // const pDifs = [0];

    // Define function that converts nucleotide string to impact factor
    function getImpactVal(nucleotide){
        switch (nucleotide){
            case "A":
                return 1;
            case "C":
                return 2;
            case "G":
                return 3;
            case "T":
                return 4;
        }
    }

    // // Create psums array
    // for (let i = 1; i < S.length +1; i++){
    //     // each element beyond the first is the difference
    //     pDifs[i] = getImpactVal(S[i-1]) - pDifs[i-1];
    //     // Each element in the array beyond the first is the impact value at S[i] + the prior total
    //     pSums[i] = getImpactVal(S[i-1]) + pSums[i-1];
    // }

    // Iterate query arrays
    for(let i = 0; i < P.length; i++){
        // Get slice for query
        let sSlice = S.slice(P[i], Q[i]+1)
        let minImpact = undefined;

        for(let nucleotide of sSlice){
            let currImpact = getImpactVal(nucleotide);
            if(typeof minImpact == 'undefined' || minImpact > currImpact){
                minImpact = currImpact;
            }
        }
        // add total to result array
        result.push(minImpact);

    }
    return result;

}
// example array is    2, 1, 3, 2, 02, 04, 01
// psums is       [ 0, 2, 3, 6, 8, 10, 14, 15 ]
// pdifs is       [ 0, 2,-1, 4,-2, 04, 00, 01 ]


function solution2(S, P, Q) {
    // Take two. After some research, realizing I was prefix summing the wrong thing: we don't
    // care about the sum of impact values (all that matters for those is relative min),
    // but we DO care about the counts of each nucleotide (starting with the lowest impact ones)

    // Init result array and 2d prefix count array
    const pCounts = [[0],[0],[0]]; // tracks sums of A, C, G nucleotides (don't need highest T)
    const result = [];

    // Create prefix counts array, one set of nucleotide counts for each step along the sequence
    for (let i = 0; i < S.length; i++){

        // Copy the previous counts for this set of counts - only one will change, done below
        pCounts[0].push(pCounts[0][i]);
        pCounts[1].push(pCounts[1][i]);
        pCounts[2].push(pCounts[2][i]);

        // Increment the corresponding nucleotide counter
        switch (S[i]){
            case "A":
                pCounts[0][i+1] += 1;
                break;
            case "C":
                pCounts[1][i+1] += 1;
                break;
            case "G":
                pCounts[2][i+1] += 1;
                break;
        }
    }

    // Now that prefix counts are created, for each query,
    // check for differences of each type in the P-Q range,
    // starting from lowest impact value
    for(let i = 0; i < Q.length; i++){
        // Check for A's (impact 1) - any increases in the A counts in range P-Q
        if(pCounts[0][Q[i]+1] - pCounts[0][P[i]] > 0){
            result.push(1);
        } else if(pCounts[1][Q[i]+1] - pCounts[1][P[i]] > 0){
            result.push(2);
        } else if(pCounts[2][Q[i]+1] - pCounts[2][P[i]] > 0){
            result.push(3);
        } else result.push(4)
    }
    return result;
}
console.log (solution2('CAGCCTA', [3, 5, 0], [4, 5, 6]));