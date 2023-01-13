function solution(numbers) {
    var answer = [];
    for(var i = 0; i < numbers.length; i++) {
        for(var j = i + 1; j < numbers.length; j++) {
            answer[numbers[i] + numbers[j]] = 0;
        }
    }
    answer = answer.map((a, i) => { 
        if(a === 0) return i;
    }).filter((a) => a !== null);
    return answer;
}
