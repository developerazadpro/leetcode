var lengthOfLastWord = function(s) {
    s = s.trim().split(' ');
    lastWord = s[s.length - 1];
    lastWordLength = s.length > 0 ? lastWord.length : 0
    return lastWordLength
};
let s = "  Hello World   ";
console.log(lengthOfLastWord(s));