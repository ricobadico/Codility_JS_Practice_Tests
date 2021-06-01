/*
A non-empty array A consisting of N integers is given. The consecutive elements of array A represent consecutive cars on a road.

Array A contains only 0s and/or 1s:

0 represents a car traveling east,
1 represents a car traveling west.
The goal is to count passing cars. We say that a pair of cars (P, Q), where 0 ≤ P < Q < N, is passing when P is traveling to the east and Q is traveling to the west.

For example, consider array A such that:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
We have five pairs of passing cars: (0, 1), (0, 3), (0, 4), (2, 3), (2, 4).

Write a function:

class Solution { public int solution(int[] A); }

that, given a non-empty array A of N integers, returns the number of pairs of passing cars.

The function should return −1 if the number of pairs of passing cars exceeds 1,000,000,000.

For example, given:

  A[0] = 0
  A[1] = 1
  A[2] = 0
  A[3] = 1
  A[4] = 1
the function should return 5, as explained above.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer that can have one of the following values: 0, 1.
 */

function solution(A) {
    // Create prefix count arrays for westbound cars.
    // Only need 1 direction, and iterate through other after
    const westboundCars = [0];

    // Iterate through A
    for (let i = 0; i < A.length; i++) {

        // Copy previous value (prefix arrays are one index ahead)
        westboundCars[i+1] = westboundCars[i];

        // Add one to corresponding array based on current A value
        if (A[i] == 1){
            westboundCars[i+1]++;
        }
    }

    // Loop once more through, using prefix counts to get pairs
    let count = 0;

    for (let i = 0; i < A.length; i++) {

        // Escape case if too many pairs
        if (count > 1000000000){
            return -1;
        }

        // Check direction of current car
        if (A[i] == 0) { // eastbound
            // Find the difference in opposing (WB) total cars from the current position to the end
            let passers = westboundCars[westboundCars.length - 1] - westboundCars[i+1];
            // Add that to the counter
            count += passers;
        }
    }

    return count;
}