<?php
    # 
    class Solution {
        function isSameArray($arr1, $arr2) {
            sort($arr1);
            $arr1Length  = count($arr1);
            $resultArray1 = [];
           
            for($i = 0; $i < $arr1Length; $i++){            
                array_push($resultArray1, $arr1[$i]);
            }
            
            $sortedarr1 = implode('', $resultArray1);
            //print_r($sortedarr1);


            sort($arr2);
            $arr2Length  = count($arr2);
            $resultArray2 = [];
           
            for($i = 0; $i < $arr2Length; $i++){            
                array_push($resultArray2, $arr2[$i]);
            }
            
            $sortedarr2 = implode('', $resultArray2);
            //print_r($sortedarr2);


            return ($sortedarr1 == $sortedarr2? true:false);
        }
        
    }

    $sol = new Solution();
    $arr1 = [4, 2, 1];
    $arr2 = [2, 1, 4];
    $sol->isSameArray($arr1, $arr2);
    

    

?>