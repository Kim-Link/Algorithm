function solution(price, money, count) {
    let arr = [];
    for(let i = 0 ; i <= count ; i++){arr.push(i)}
    let totalPrice = arr.reduce((a,b) => a + (price*b) )
    let result = money - totalPrice;
    return (result < 0) ? -result : 0;
}