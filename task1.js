function reverseNumber(x) {
  // Convert the number to a string, reverse it, and convert it back to a number
  const reversedString = x.toString().split('').reverse().join('');
  const reversedNumber = parseInt(reversedString, 10);

  return reversedNumber;
}

// Test the function
const x = 32243;
const reversed = reverseNumber(x);
console.log(reversed); // Output: 34223
