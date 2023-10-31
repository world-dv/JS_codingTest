function solution(phone_number) {
    var answer = '';
    answer = phone_number.split("").map((a, i) => { 
        if(i < (phone_number.length - 4))
            return "*";
        else 
            return a
    }).join("");
    return answer;
} 
//fill로 더 쉽게 구현 가능
