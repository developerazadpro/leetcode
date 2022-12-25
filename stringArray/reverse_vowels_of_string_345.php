<?php
    class Solution {

        /**
         * @param Integer $n
         * @return String[]
         */
        function reverseVowels($s) {        
            $vowels = ['a','e','i','o','u','A','E','I','O','U'];
            // put string into the array
            $sArr = str_split($s);
            // identify all vowels and put them into an array and check their position
            $sArrVowels = [];
            $sArrVowelsPos = [];
            foreach($sArr as $key => $value){
                if(in_array($value, $vowels)){
                    $sArrVowels[] = $value;
                    $sArrVowelsPos[] = $key;
                }
            }
            //echo '<pre>'; print_r($sArrVowels);
            //echo '<pre>'; print_r($sArrVowelsPos);//exit();
            // reverse the vowels in array
            $sArrVowelsReversed = array_reverse($sArrVowels);
            //echo '<pre>'; print_r($sArrVowelsReversed);//exit();
            // put them back into string, i.e set vowel postion
            foreach($sArrVowelsPos as $pos => $key){        
                    //echo $pos.'----'.$key.'<br>';        
                    $sArr[$key] = $sArrVowelsReversed[$pos];
            }
            return implode($sArr);
        }
    }

    $sol = new Solution();
    $s = "hello";
    echo '<pre>';print_r($sol->reverseVowels($s));

    
    

?>


