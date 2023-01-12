function solution(nums) {
    var answer = 0;
    for(var i = 0; i < nums.length; i++) {
        for(var j = i + 1; j < nums.length; j++){
            for(var z = j + 1; z < nums.length; z++) {
                if(count(nums.at(i) + nums.at(j) + nums.at(z))) {
                    answer+=1;
                }
            }
        }
    }
    return answer;
}

function count(x) {
    for(var i = 2; i < x; i++) {
        if(x % i === 0) return false;
    }
    return true;
}
