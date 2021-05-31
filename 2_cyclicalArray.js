function solution(A, K) {
    // Get array length
    const A_LEN = A.length;

    // Clone array to have copy of unrotated state for reference
    const clonedA = [...A];

    // loop clone array, set current val to original array's index + K modulo arraylength
    for(let i = 0; i < A_LEN; i++){
        let newIndex = (i + K) % A_LEN
        A[newIndex] = clonedA[i];
    }

    // return original array
    return A;
}