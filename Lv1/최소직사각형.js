function solution(sizes) {
    var answer = 0;
    var max_s = Math.max(...sizes.flat());
    sizes = sizes.map((a) => {
        return a.sort((b, c) => c - b);
    });
    answer = Math.max(...sizes.flat().filter((a, i) => i % 2 === 1));
    return answer * max_s;
}
