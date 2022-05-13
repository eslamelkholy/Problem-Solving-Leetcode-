/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const pHash = {};
  const result = [];
  for (const char of p) pHash[char] ? pHash[char]++ : (pHash[char] = 1);

  for (let i = 0; i < s.length - p.length + 1; i++) {
    const sHash = {};
    for (let j = i; j < i + p.length; j++) {
      const currentChar = s[j];
      sHash[currentChar] ? sHash[currentChar]++ : (sHash[currentChar] = 1);
    }
    // Compare Two Hash Maps
    if (isTwoHashMapEquals(sHash, pHash)) {
      result.push(i);
    }
  }

  return result;
};

const isTwoHashMapEquals = (hash1, hash2) => {
  return Object.entries(hash1).sort().toString() === Object.entries(hash2).sort().toString();
};

console.log(findAnagrams('cbaebabacd', 'abc'));
console.log(findAnagrams('abab', 'ab'));
