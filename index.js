function isPalindrome(word) {
  // Write your algorithm here
  return word === word.split('').reverse().join('');
}
/* 
  Add your pseudocode here

  isPalindrome(string) {
    split the string to form an array
    initialize newWord & map each letter in the string array using string.pop
    return newWord
    if(newWord and string are strictly equal){
      return true;
    }else {
      return false;
    }
  }
*/

/*
  Add written explanation of your solution here
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
