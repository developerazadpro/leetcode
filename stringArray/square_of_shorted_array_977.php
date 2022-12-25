<?php
    class Solution {

        /**
         * @param Integer $n
         * @return String[]
         */
        function sortedSquares($nums) {
        
            $numSquares = [];
            foreach($nums as $number){
                $number *= $number;
                array_push($numSquares, $number);
            }
            sort($numSquares);
            return $numSquares;
        }
    }

    $sol = new Solution();
    $nums = [-7,-3,2,3,11];
    echo '<pre>';print_r($sol->sortedSquares($nums));

    
    

?>


