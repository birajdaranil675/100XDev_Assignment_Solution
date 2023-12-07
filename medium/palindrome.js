/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  
  let lp = 0;
  let rp = str.length;

  if(rp == 1 || rp == 0)
    return true;
  rp -= 1;
  while(rp>lp)
  {
    let lc = str.charAt(lp).toLocaleLowerCase().charCodeAt();
    let rc = str.charAt(rp).toLocaleLowerCase().charCodeAt();

    if(lc<97 || lc>122)
    {
      lp++;
      continue;
    }
    else if(rc<97 || rc>122)
    {
      rp--;
      continue;
    }
    else if(rc !== lc)
      return false;

    rp--;
    lp++;
  }

  return true;

}

module.exports = isPalindrome;
