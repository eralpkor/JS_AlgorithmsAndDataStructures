function _hash(key, arrayLen) {
  let total = 0;
  let _PRIME = 31;

  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    // Get the character code
      // If you subtract 96 gives us position in the alphabet
    let value = char.charCodeAt(0) - 96;
    // Use mod array length to get location in array
    total = (total * _PRIME + value) % arrayLen;
  }

  return total;
}

console.log(_hash('eralp', 5))
console.log(_hash('susan', 5))

console.log(_hash('jonathan', 5))
console.log(_hash('pink', 10))


