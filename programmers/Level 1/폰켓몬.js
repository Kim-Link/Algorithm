function solution(nums) {
    let num = new Set(nums)
    let newNum = [...num]
    let a = newNum.length;
    let b = nums.length / 2
    if(a > b){return b
    }else{return a}
}