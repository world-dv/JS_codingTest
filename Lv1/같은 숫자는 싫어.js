function solution(arr)
{
    var answer = [];
    arr.forEach((a, i) => {
        if(a !== arr.at(i+1)) {
            answer.push(a);
        }
    });
    return answer;
}
