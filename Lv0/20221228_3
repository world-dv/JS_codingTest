function solution(numbers) {
    var answer;
    var int_array = [];
    var mi_array = [];
    int_array = numbers.filter((a) => a >= 0).sort(function(a, b) { return b - a});
    mi_array = numbers.filter((a) => a < 0).sort(function(a, b) { return a - b});
    
    if(int_array.length === 1 && mi_array.length === 1) {
        answer = int_array[0] * mi_array[0];
    } else {
        var a = (!isNaN(int_array[0] * int_array[1]) ? int_array[0] * int_array[1] : 0);
        var b = (!isNaN(mi_array[0] * mi_array[1]) ? mi_array[0] * mi_array[1] : 0);
    
        answer = (a > b ? a : b);
    }
    return answer;
}
