<?php
    # To Lower Case O(1)
    class Solution {
        function mergeTwoLists($list1, $list2) {
            //$res = sort(array_merge($list1, $list2));
            return sort(array_merge($list1, $list2));
        }
        
    }

    $sol = new Solution();
    $list1 = [1,2,4];
    $list2 = [1,3,4];
    echo '<pre>';print_r($sol->mergeTwoLists($list1, $list2));
    

?>