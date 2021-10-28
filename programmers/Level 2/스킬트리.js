function solution(skill, skill_trees) {
    let count = 0
    let newSkill = `[^${skill}]`
    newSkill = RegExp(newSkill,'g')
    let resultSkills = []
    for(let i = 0; i < skill_trees.length; i++){
        let el = skill_trees[i].replace(newSkill,'').split('')
        if(el.length === 0){
            count += 1
        }else {
            resultSkills.push(el)        
        }
    
    }
    skill = skill.split('');
    let length = skill.length
    for(let i = 0; i < length; i++){
        for(let j = 0; j < resultSkills.length ; j++){
            if(JSON.stringify(skill) === JSON.stringify(resultSkills[j])){
                count = count + 1
            }    
        }
        skill.pop()
    }
    return count
}