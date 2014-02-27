var vigenery = {
    keyWord: String,

    alphabet: [],

    encryptChar: function (c, k, length) {
        return (c + k) % length;
    },

    decryptChar: function (c, k, length) {
        return (c - k + length) % length;
    },

    execute: function (message, action, callback) {
        var key = this.keyWord;

        while (key.length <= message.length) {
            key = key + key;
        }
        key = key.slice(0, message.length);
        var result = '';
        for (var i = 0; i < message.length; i++) {
            var currKey = action(this.alphabet.indexOf(message[i]), this.alphabet.indexOf(key[i]), this.alphabet.length);
            result = result + this.alphabet[currKey];
        }
        if (typeof callback == 'undefined') {
            return result;
        } else {
            return callback(result);
        }
    }
};
