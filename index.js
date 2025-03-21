function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split('').reverse().join('');
}
/* 
  Add your pseudocode here

  isPalindrome(string) {
    split the string to form an array
    reverse the string
    make the reversed string a word using join()
    return the word
  }
*/

/*
  Add written explanation of your solution here

  When the function isPalindrome is called, with the word as an argument, the word is split to form an array.
  This array is reversed using JavaScript's reverse() method.
  The reversed array is converted back to a string using the join() method and compared with the original value using a strictly equal operator.
  This returns true or false based on whether the condition was met or not.

*/



// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
