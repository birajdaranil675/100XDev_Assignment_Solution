/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
    let characters = [];
    let len1 = str1.length;
    let len2 = str2.length;

    if(len1 !== len2)
      return false;

    for(let i=0; i<len1; i++)
    {
      if(str1.charAt(i) != ' ')
        characters.push(str1.charAt(i).toLocaleLowerCase());
    }

    for(let i=0; i<len2; i++)
    {
      let ch = str2.charAt(i).toLocaleLowerCase();
      if(characters.includes(ch, 0))
        characters[characters.indexOf(ch)] = ' ';
      else
        return false;
    }

    return true;
}

module.exports = isAnagram;
