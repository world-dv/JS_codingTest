function solution(bin1, bin2) {
    var answer = '';
    answer = String((parseInt(bin1,2) + parseInt(bin2, 2)).toString(2));
    return answer;
}
