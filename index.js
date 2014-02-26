var alphabet = function () {
    return ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ''];
};

var crypt = function (c, k, length) {
    return (c + k) % length;
};

var decrypt = function (c, k, length) {
    return (c - k + length) % length;
};

var run = function (message, key, aplh, action) {
    var tempKey = '';

    while (tempKey.length <= message.length) {
        tempKey = tempKey + key;
    }

    tempKey = tempKey.slice(0, message.length);

    var result = '';

    for (var i = 0; i < message.length; i++) {
        var c = aplh.indexOf(message[i]);
        var k = aplh.indexOf(tempKey[i]);

        var keyI = action(c, k, aplh.length);

        result = result + aplh[keyI];
    }

    return result;
};

var result = run('attackatdawn', 'lemon', alphabet(), crypt);
console.log(result);
result = run(result, 'lemon', alphabet(), decrypt);
console.log(result);


