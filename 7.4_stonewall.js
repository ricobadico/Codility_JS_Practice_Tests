/*
You are going to build a stone wall. The wall should be straight and N meters long, and its thickness should be constant; however, it should have different heights in different places. The height of the wall is specified by an array H of N positive integers. H[I] is the height of the wall from I to I+1 meters to the right of its left end. In particular, H[0] is the height of the wall's left end and H[N−1] is the height of the wall's right end.

The wall should be built of cuboid stone blocks (that is, all sides of such blocks are rectangular). Your task is to compute the minimum number of blocks needed to build the wall.

Write a function:

function solution(H);

that, given an array H of N positive integers specifying the height of the wall, returns the minimum number of blocks needed to build it.

For example, given array H containing N = 9 integers:

  H[0] = 8    H[1] = 8    H[2] = 5
  H[3] = 7    H[4] = 9    H[5] = 8
  H[6] = 7    H[7] = 4    H[8] = 8
the function should return 7. The figure shows one possible arrangement of seven blocks.



Write an efficient algorithm for the following assumptions:

N is an integer within the range [1..100,000];
each element of array H is an integer within the range [1..1,000,000,000].
 */

function solution(H) {
    // Rough plan: go point by point from left to right, building blocks upward to meet height needs,
    // adding to stack if needed, clearing from stack if "resolved" (if structure to the right
    // is best handled by other blocks)

    // Create stack - bricks earlier in the stack are physically below the later ones
    const brickStack = [];
    let stackSize = 0;

    // Create brick counter
    let numBricks = 0;

    // Iterate over height array
    for (let i = 0; i < H.length; i++) {
        let curHeight = H[i];

        // If current brick(s) too high, its work is done and we "remove" it from our concern
        while (stackSize > 0 && brickStack[stackSize - 1] > curHeight) {
            stackSize--;
        }
        // Then, if we have no bricks or the top brick is too small, we need a new one on top
        if (stackSize === 0 || brickStack[stackSize - 1] < curHeight) {
            brickStack[stackSize] = curHeight;
            stackSize++;
            numBricks++;
        }
    }

    return numBricks;
}

solution( [8, 8, 5, 7, 9, 8, 7, 4, 8])