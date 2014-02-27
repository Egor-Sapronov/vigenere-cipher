var vigenery = {
    keyWord: String,

    alphabet: [],

    encryptChar: function (messageIndex, keyIndex, alphabetLength) {
        return (messageIndex + keyIndex) % alphabetLength;
    },

    decryptChar: function (messageIndex, keyIndex, alphabetLength) {
        return (messageIndex - keyIndex + alphabetLength) % alphabetLength;
    },

    execute: function (message, action, callback) {
        var key = this.keyWord;
        while (key.length <= message.length) {
            key += this.keyWord;
        }
        key = key.slice(0, message.length);

        var result = '';
        for (var i = 0; i < message.length; i++) {
            var messageIndex = this.alphabet.indexOf(message[i]);
            var keyIndex = this.alphabet.indexOf(key[i]);
            var charIndex = action(messageIndex, keyIndex, this.alphabet.length);
            result = result + this.alphabet[charIndex];
        }

        if (typeof callback == 'undefined') {
            return result;
        } else {
            return callback(result);
        }
    }
};
