// Check if a string is same as reverse

function isPalindrome(string) {
    let isPalindrome = true;
    let length = string.length;
    for (let i=0; i< length/2; i++) {
        if (string.charAt(i) !== string.charAt(length - i-1)) {
            isPalindrome = false;
            break;
        }
    }
    console.log(string, 'is a palnidrome : ', isPalindrome)
}
isPalindrome('abjkjkklihccbad')
isPalindrome('aditya')
isPalindrome('asdsa')