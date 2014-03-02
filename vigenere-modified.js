var vigenereModified = {
    keyWord: String,

    execute: function (message, callback) {
        var key = this.keyWord;
        while (key.length <= message.length) {
            key += this.keyWord;
        }

        var messageBytes = message.getBytes();
        var keyBytes = key.getBytes();

        var result = '';
        for (var i = 0; i < message.length; i++) {
            var currCharCode = messageBytes[i] ^ keyBytes[i];
            var newChar = String.fromCharCode(currCharCode);
            result =result+ newChar;
        }

        if (typeof callback == 'undefined') {
            return result;
        } else {
            return callback(result);
        }
    }
};
