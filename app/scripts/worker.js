var add = function(data) {
    return data[0] + data[1];
};

self.addEventListener('message', function(e) {
    self.postMessage(add(e.data));
}, false);
