Vigenere cipher
===============

The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword.

#Example for regular vigenere cipher
```
var alphabet = function () {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' '];
};

vigenere.keyWord = 'lemon';
vigenere.alphabet = alphabet();

vigenere.execute('attackatdawn', vigenery.encryptChar, function (result) {
    console.log(result);
    vigenere.execute(result, vigenere.decryptChar, function (result) {
        console.log(result);
    })
});
```
#Example for modified vigenere cipher
```
vigenereModified.keyWord = 'lemon';

vigenereModified.execute('Безопасность', function (result) {
    console.log(result);
    vigenereModified.execute(result, function (result) {
        console.log(result);
    })
});
```

#Description
To encrypt, a table of alphabets can be used, termed a tabula recta, Vigenère square, or Vigenère table.
![Tabula recta](http://www.knology.net/~tomrodman/geocaching/images/Vigenere_Square.jpg)
<p>For example, suppose that the plaintext to be encrypted is:
<p>ATTACKATDAWN</p>
The person sending the message chooses a keyword and repeats it until it matches the length of the plaintext, for example, the keyword "LEMON":
<p>LEMONLEMONLE</p>
Each row starts with a key letter. The remainder of the row holds the letters A to Z (in shifted order). Although there are 26 key rows shown, you will only use as many keys (different alphabets) as there are unique letters in the key string, here just 5 keys, {L, E, M, O, N}. For successive letters of the message, we are going to take successive letters of the key string, and encipher each message letter using its corresponding key row. Choose the next letter of the key, go along that row to find the column heading that matches the message character; the letter at the intersection of [key-row, msg-col] is the enciphered letter.
<p>For example, the first letter of the plaintext, A, is paired with L, the first letter of the key. So use row L and column A of the Vigenère square, namely L. Similarly, for the second letter of the plaintext, the second letter of the key is used; the letter at row E and column T is X. The rest of the plaintext is enciphered in a similar fashion:
<p>Plaintext:	ATTACKATDAWN</p>
<p>Key:	LEMONLEMONLE</p>
<p>Ciphertext:	LXFOPVEFRNHR</p>
Decryption is performed by going to the row in the table corresponding to the key, finding the position of the ciphertext letter in this row, and then using the column's label as the plaintext. For example, in row L (from LEMON), the ciphertext L appears in column A, which is the first plaintext letter. Next we go to row E (from LEMON), locate the ciphertext X which is found in column T, thus T is the second plaintext letter.



