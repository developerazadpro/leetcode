<?php
    class Solution {

        /**
         * @param Integer $n
         * @return String[]
         */
        // O(n)
        function fizzBuzz($n) {
            $res = [];
            for($i = 1; $i <= $n; $i++){
                if($i % 3 == 0 && $i % 5 == 0){
                    $str = 'FizzBuzz';
                    array_push($res, $str);
                }else if($i % 3 == 0 ){
                    $str = 'Fizz';;
                    array_push($res, $str);
                }else if($i % 5 == 0){
                    $str = 'Buzz';;
                    array_push($res, $str);
                }else{
                    $str = (string)$i;;
                    array_push($res, $str);
                }
            }
            return $res;
        }
    }

    $sol = new Solution();
    echo '<pre>';print_r($sol->fizzBuzz(15));
    

?>
