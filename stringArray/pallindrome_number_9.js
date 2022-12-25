var isPalindrome = function(x) {
    
    //reverse number
    var reverseNumber = x.toString().split('').reverse().join('');
    if(x == reverseNumber){
        return true;
    }
    return false;
    
    
};
console.log(isPalindrome(10));