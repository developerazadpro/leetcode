<?php
    class Solution {

        
        /**
         * @param String $date
         * @return String
         */

        function reformatDate($date) {
            $date_arr = explode(' ', $date);

            $day   = $date_arr[0];
            $day   = str_replace('th', '', $day);
            $day   = str_replace('st', '', $day);
            $day   = str_replace('nd', '', $day);
            $day   = str_replace('rd', '', $day);
            $day   = $day < 10?'0'.$day:$day;

            $month = $date_arr[1];
            $monthArr = [
                'Jan' => '01',
                'Feb' => '02',
                'Mar' => '03',
                'Apr' => '04',
                'May' => '05',
                'Jun' => '06',
                'Jul' => '07',
                'Aug' => '08',
                'Sep' => '09',
                'Oct' => '10',
                'Nov' => '11',
                'Dec' => '12'
            ];
            $month = $monthArr[$month];
            $year  = $date_arr[2];
            
            return $date = $year.'-'.$month.'-'.$day;
        }
    }

    $sol = new Solution();
    $date = "22nd Apr 2023";
    echo '<pre>';print_r($sol->reformatDate($date));
    

?>
