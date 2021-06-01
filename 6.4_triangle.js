/*
An array A consisting of N integers is given. A triplet (P, Q, R) is triangular if 0 ≤ P < Q < R < N and:

A[P] + A[Q] > A[R],
A[Q] + A[R] > A[P],
A[R] + A[P] > A[Q].
For example, consider array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
Triplet (0, 2, 4) is triangular.

Write a function:

function solution(A);

that, given an array A consisting of N integers, returns 1 if there exists a triangular triplet for this array and returns 0 otherwise.

For example, given array A such that:

  A[0] = 10    A[1] = 2    A[2] = 5
  A[3] = 1     A[4] = 8    A[5] = 20
the function should return 1, as explained above. Given array A such that:

  A[0] = 10    A[1] = 50    A[2] = 5
  A[3] = 1
the function should return 0.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−2,147,483,648..2,147,483,647].
 */

function solution(A) {
    // I have a fuzzy intuition that we can sort by value, and check consecutive triplets,
    // wherever A[i] < A[i+1] + A[i+2], and check the other sides from there. I believe numbers
    // closer together are most likely to satisfy this criteria (and if numbers split apart do,
    // so will those closer ones. Again, fuzzy, but we'll try)


    // Sort by value (arbitratily descending)
    A.sort((a,b) => b-a);

    // Loop over all triplets in the array
    for (let i = 0; i < A.length - 2; i++){
        // Check if largest side meets triangle critera
        if (A[i] < A[i+1] + A[i+2]
            && A[i+1] < A[i] + A[i+2]
            && A[i+2] < A[i] + A[i+1]) {
            return 1;
        }
    }

    return 0;

}