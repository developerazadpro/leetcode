var reverseWords = function(s) {
    const str = s.split(' ');console.log(str);
    for(let i in str){
        console.log(str[i]);
        str[i] = str[i].split('').reverse().join('');console.log(str[i])
    }
    return str.join(' ');

};
let s = "Let's take LeetCode contest"
console.log(reverseWords(s));