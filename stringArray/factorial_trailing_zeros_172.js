var trailingZeroes = function(n){
    // 1st way

    // let noOfFives = 0;
    // while(n >= 5){
    //     n = Math.floor(n/5); console.log(n)
    //     noOfFives += n
        
    // }
    // return noOfFives

    // 2nd way
    // Negative Number Edge Case...
    if (n < 0) return -1;
    // Initialize the output result i.e., the number of trailing zeroes...
	let totalZero = 0;
    // Count number of 5s in prime factors of n!
	for (let i = 5; n/i >= 1; i *= 5) {
		totalZero += Math.floor(n/i);
	}
    // Return the number of trailing zeroes...
    return totalZero;
}
console.log(trailingZeroes(5))