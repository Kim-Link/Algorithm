function solution(numbers) {

    let result =  numbers.map((a) => String(a))
        .sort((a, b) => b + a - (a + b))
        .join('');
    
    return result[0] === '0' ? '0' : result
}