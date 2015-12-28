var events = require('events');
var eventEmitter = new events.EventEmitter();
var listener1 = function() {
    console.log('listener1 has executed!');
}
var listener2 = function() {
    console.log('listener2 has executed!');
}
eventEmitter.on('connection',listener1);
eventEmitter.addListener('connection',listener2);
var eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log('The number of listeners is ' + eventListeners);
eventEmitter.emit('connection');
eventEmitter.removeListener('connection',listener1);
console.log('remove listener1');
eventEmitter.emit('connection');
eventListeners = events.EventEmitter.listenerCount(eventEmitter,'connection');
console.log('The number of listeners is ' + eventListeners);
console.log('All finished!');

var fs = require('fs');
var data = 'wocacaca';
var writeStream = fs.createWriteStream('docs/gtmd.txt');
writeStream.write(data,'utf-8');
writeStream.end();
writeStream.on('finish',function() {
    console.log('\nDo it!');
});
writeStream.on('error',function(err) {
    console.log(err.stack);
});
console.log('\n\nPro finished.');
