function solution(priorities, location) {

    let print = 0;
    while (priorities.length) {
        if (priorities[0] < Math.max(...priorities)) {
            if (--location < 0) location = priorities.length - 1;
            priorities.push(priorities.shift());
        } else {
            print++;
            if (--location < 0) return print;
            priorities.shift();
        }
    }
    
}