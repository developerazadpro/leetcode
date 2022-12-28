var strStr = function(haystack, needle) {
    let strindex = haystack.indexOf(needle);
    //console.log(strindex);
    return strindex;
};

let haystack = 'leetcode';
let needle   = 'leeto';
console.log(strStr(haystack, needle));