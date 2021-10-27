function solution(s) {
    s= s.replace(/[{}]/g,'').split(',')
    //객에 숫자를 카운팅 해서 넣기
    let obj = {}
    for(let i = 0; i < s.length; i++){
        if(obj[s[i]]){
            obj[s[i]] += 1
        } else {
            obj[s[i]] = 1
        }
    }
    //value 값으로 sort
    //key 값으로 result push
    let result = []
    for (const prop in obj){
        let arr =[]
        arr.push(prop,obj[prop])
        result.push(arr)
    }
    result = result.sort((a,b) => b[1]-a[1]).map((el) => Number(el[0]) )
    return result
    
    
}