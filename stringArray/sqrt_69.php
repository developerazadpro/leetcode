<?php
    function mySqrt($x) {

            if($x == 0 || $x == 1){
                return $x;
            }

            $low  = 1;
            $high = $x;
            while($low <= $high){
                $mid = floor(($low + $high)/2);
                $sqr = $mid * $mid;
                //echo $mid;
                if($sqr == $x){
                    return $mid;
                }else if($sqr < $x){
                    $low = $mid + 1;
                }else{                    
                    $high = $mid - 1;
                }
            }
            return $high;
    }

    echo mySqrt(8);


?>