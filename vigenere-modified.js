var vigenereModified = {
    keyWord: String,

    execute: function (message, callback) {
        var key = this.keyWord;
        while (key.length <= message.length) {
            key += this.keyWord;
        }

        var m = message.getBytes();
        var k = key.getBytes();

        var result = '';
        for (var i = 0; i < message.length; i++) {
            var c = m[i] ^ k[i];
            var newChar = String.fromCharCode(c);
            result =result+ newChar;
        }

        if (typeof callback == 'undefined') {
            return result;
        } else {
            return callback(result);
        }
    }
};
