var groupAnagrams = function(strs){
    const hasTable = {}
    strs.forEach(str => {
        const key = str.split('').sort().join();
        if(hasTable[key]){
            hasTable[key].push(str);
        }else{
            hasTable[key] = [str];
        }
    });
    return Object.values(hasTable)
}

const strs = ["eat","tea","tan","ate","nat","bat"];

console.log(groupAnagrams(strs));