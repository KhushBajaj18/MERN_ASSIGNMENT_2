function sortStringAlphabetically(inputString) {
    // Split the string into an array of characters, sort the array, and join it back into a string
    const sortedString = inputString.split('').sort().join('');
    return sortedString;
  }
  
  // Main code
  const input = 'webmaster';
  const sorted = sortStringAlphabetically(input);
  console.log(`Original string: ${input}`);
  console.log(`Sorted string: ${sorted}`);
  