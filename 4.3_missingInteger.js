/*
Write a function:

function solution(A);

that, given an array A of N integers, returns the smallest positive integer (greater than 0) that does not occur in A.

For example, given A = [1, 3, 6, 4, 1, 2], the function should return 5.

Given A = [1, 2, 3], the function should return 4.

Given A = [−1, −3], the function should return 1.

Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array A is an integer within the range [−1,000,000..1,000,000].
 */

function solution(A) {
    // Init count array
    const countArr = [];
    for(let i = 0; i < A.length+1; i++){
        countArr[i] = 0;
    }

    // Loop through A
    for(let val of A){
        // Use each val to increment count array
        countArr[val]++;
    }

    // Loop through countArr until first instance of count 0
    for(let i =0; i < countArr.length; i++){
        if(countArr[i] == 0 && i != 0){
            return i;
        }
    }

    // We get here if no missing value, return next value
    return A.length+1;
}
