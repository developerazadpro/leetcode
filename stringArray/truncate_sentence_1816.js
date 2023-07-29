var truncateSentence = function(s, k) {    
    return truncated_str = s.split(' ').slice(0, k).join(' ');
};
const s = "What is the solution to this problem";
const k = 5;
console.log(truncateSentence(s, k))