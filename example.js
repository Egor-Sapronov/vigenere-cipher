var alphabet = function () {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
};

vigenere.keyWord = 'lemon';
vigenere.alphabet = alphabet();
vigenere.execute('attackatdawn', vigenere.encryptChar, function (result) {
    console.log(result);
    vigenere.execute(result, vigenere.decryptChar, function (result) {
        console.log(result);
    })
}); // Regular vigenere cipher

vigenereModified.keyWord = 'lemon';
vigenereModified.execute('Безопасность', function (result) {
    console.log(result);
    vigenereModified.execute(result, function (result) {
        console.log(result);
    })
}); // Modified vigenere cipher

