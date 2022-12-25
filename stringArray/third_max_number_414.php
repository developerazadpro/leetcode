<?php
    class Solution {

        /**
         * @param Integer $n
         * @return String[]
         */
        function thirdMax($nums) {
            $nums = array_unique($nums);
            rsort($nums);
            foreach($nums as $index => $number){
                if(isset($index) && $index == 2){
                    return $number;
                }
            }
            return $nums[0];
        }
    }

    $sol = new Solution();
    $nums = [2,2,3,1];
    echo '<pre>';print_r($sol->thirdMax($nums));

    
    

?>


