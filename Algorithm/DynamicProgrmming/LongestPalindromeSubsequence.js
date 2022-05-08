const findLongestPalindromeSubsequqnce = (string) => {
    console.log(recursion(string, 0, string.length-1))
}

const recursion = (string, start, end) => {
    if (start > end) return 0;
    if (start ==  end) return 1;

    let startChar = string.charAt(start), endChar = string.charAt(end);
    if (startChar === endChar) {
        return 2 + recursion(string, start+1, end-1)
    } else {
        return Math.max(recursion(string, start+1, end), recursion(string, start, end-1))
    }
}

findLongestPalindromeSubsequqnce("bbbab")
findLongestPalindromeSubsequqnce("cbbd")