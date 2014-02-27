vigenere-cipher
===============

The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword.

#Example
```
var alphabet = function () {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
};

vigenery.keyWord = 'lemon';
vigenery.alphabet = alphabet();

vigenery.execute('attackatdawn', vigenery.encryptChar, function (result) {
    console.log(result);
    vigenery.execute(result, vigenery.decryptChar, function (result) {
        console.log(result);
    })
});
```

