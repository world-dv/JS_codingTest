function solution(array) {
    var answer = 0;
    var count = new Array(Math.max(...array) + 1).fill(0);
    
    array.map((a) => (count[a] += 1));
    var count_match = count.filter((a) => (a === Math.max(...count)));
    answer = (count_match.length >= 2) ? -1 : count.indexOf(Math.max(...count));

    return answer;
}
