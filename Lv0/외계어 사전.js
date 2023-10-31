function solution(spell, dic) {
    var answer = 0;
    for(var i = 0; i < spell.length; i++) {
        dic = dic.filter((a) => a.indexOf(spell.at(i)) != -1); 
    }
    answer = (dic.length >= 1) ? 1 : 2;
    return answer;
}
