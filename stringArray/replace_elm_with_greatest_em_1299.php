<?php
    class Solution {

        /**
         * @param Integer $n
         * @return String[]
         */
        function replaceElements($arr) {
            $res = [];
            foreach($arr as $index => $number){
                if($index !== (count($arr) - 1)){
                    $sliceArr = array_slice($arr, $index+1);
                    $rightMaxNumber = max($sliceArr);
                    $res[] = $rightMaxNumber;
                }else{
                    $res[] = -1;
                    
                }
            }
            return $res;
        }
    }

    $sol = new Solution();
    $arr = [17,18,5,4,6,1];// 18,6,6,6,1,-1
    echo '<pre>';print_r($sol->replaceElements($arr));

    
    

?>


