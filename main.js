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