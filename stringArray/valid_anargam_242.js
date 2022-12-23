var isAnagram = function(s, t) {
    s = s.split('').sort().join('');
    t = t.split('').sort().join('');
    if(s === t){
        return true
    }
    return false;
};
let s = "anagram";
let t = "nagaram";
console.log(isAnagram(s, t));