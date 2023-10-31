function solution(numbers) {
    var answer = 0;
    var number = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(var i = 0; i < 10; i++) {
        if(numbers.indexOf(number[i]) !== -1) {
            numbers = numbers.replaceAll(number[i], i, number[i].length);
        }
    }
    answer = Number(numbers);
    return answer;
}
