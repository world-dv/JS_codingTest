function solution(my_string) {
    var answer = '';
    answer = my_string.split("").map((a) => {
        if(a == a.toUpperCase())
            a = a.toLowerCase();
        else
            a = a.toUpperCase();
        return a;
    }).join("");
    return answer;
}
