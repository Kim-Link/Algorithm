function solution(lottos, win_nums) {
    let arr1 = lottos.sort();
    let arr2 = win_nums.sort();
    if(JSON.stringify(arr1) === JSON.stringify(arr2)){
        return [1,1]
    }else if(Math.max(...arr1) === 0){
        return [1,6]
    }
    let result = arr1.filter((el) => arr2.includes(el))
    let count = arr1.filter(el => el === 0).length
    if(result.length === 0){
        return [6,6]
    } else {
        return [7 - (result.length + count), 7 - result.length]
    }
}