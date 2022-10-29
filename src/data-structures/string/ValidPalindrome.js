// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.



// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let regex = /[^A-Za-z0-9]/g;
  s = s.toLowerCase().replace(regex, "");
  let splitArray = s.split("");
  let reversedSplitArray = splitArray.reverse();
  if (splitArray === reversedSplitArray) {
    return true;
  }

  return false;


};

console.log(isPalindrome("A man, a plan, a canal: Panama"))