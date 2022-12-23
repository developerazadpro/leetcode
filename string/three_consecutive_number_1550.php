<?php
    class Solution {

        /**
         * @param Integer[] $arr
         * @return Boolean
         */
        function threeConsecutiveOdds($arr) {
            $oddNumber = 0;
            foreach($arr as $num){
                
                if( $num %2 != 0){
                   $oddNumber++;
                   if($oddNumber == 3){
                        return true;
                   }
                }else{
                    $oddNumber = 0;
                }
            }
            return false;
            
        }
    }
    $sol = new Solution();
    $arr = [1,2,34,3,4,5,7,23,12];
    echo '<pre>';print_r($sol->threeConsecutiveOdds($arr));

?>