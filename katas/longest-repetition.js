const longestRepetition = (s) => {
    if (s === '') return ['', 0];
    const repeatedChars = s.match(/(.)\1*/g);
    const repeatedCharsLength = repeatedChars.map(str => str.length);
    const maxCharsLength = Math.max(...repeatedCharsLength)
    const [maxChars] = repeatedChars.filter(str => str.length === maxCharsLength);
    return [maxChars[0], maxCharsLength];
}

console.log(longestRepetition("aaaabb"));
console.log(longestRepetition("bbbaaabaaaa"));
console.log(longestRepetition("cbdeuuu900"));
console.log(longestRepetition("abbbbb"));
console.log(longestRepetition("aabb"));
console.log(longestRepetition(""));
console.log(longestRepetition("ba"));