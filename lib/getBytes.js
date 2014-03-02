String.prototype.getBytes = function () {
    var bytes = [];
    for (var i = 0; i < this.length; i++) {
        bytes.push(this.charCodeAt(i));
    }

    return bytes;
};