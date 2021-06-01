/*
Write a function

function solution(A);

that, given an array A consisting of N integers, returns the number of distinct values in array A.

For example, given array A consisting of six elements such that:

 A[0] = 2    A[1] = 1    A[2] = 1
 A[3] = 2    A[4] = 3    A[5] = 1
the function should return 3, because there are 3 distinct values appearing in array A, namely 1, 2 and 3.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [0..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

function solution(A) {
    // Order the array so that same values are adjacent
    A.sort((ele1,ele2) => ele1-ele2);

    let distCount;
    // Init counter to track distinct values (start at 1, assuming non empty array)
    if(A.length == 0){
        return 0;
    } else {
        distCount = 1;
    }

    // Iterate over array, adding one to counter whenever currrent element does not match prev
    for (let i = 0; i < A.length - 1; i++) {
        if (A[i] != A[i+1]) {
            distCount++;
        }
    }

    return distCount;

}