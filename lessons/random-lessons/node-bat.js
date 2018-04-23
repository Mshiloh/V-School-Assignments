//Given an int n, return True if it is within 10 of 100 or 200.
//NOte: abs(num) computes the absolute value of a number.

nearHundred = function (n) {
        //use a conditional
        /*
    if ((n > 89 && n < 111) || (n > 189 && n < 211))
        return true;
} else {
    return false;
}
*/
        //OR 


        //return ((n > 89 && n < 111) || (n > 189 && n < 211));
        <=

        return Math.abs(n - 100) <=10 || Math.abs(n - 200) <= 10;