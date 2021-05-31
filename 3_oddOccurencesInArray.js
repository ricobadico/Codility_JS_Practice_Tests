function solution(A) {
    // Create an object for counting instances of each result
    const countMap = {};

    // Loop through A, counting the number of instances of each value in a map
    for(let val of A){
        if(typeof countMap[val] == "undefined"){
            // Add one if new
            countMap[val] = 1;
        }
        else {
            //
            countMap[val] += 1;
            // If we get to 2, we can remove this
            if(countMap[val] == 2){
                delete countMap[val];
            }
        }
    }
    // At this stage, only one prop in the map! Return its key
    // Could easily check key length here to validate non-conforming array arguments
    const answer = parseInt(Object.keys(countMap)[0]);
    return answer;
}