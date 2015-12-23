var events = require ('events');
var eventEmitter = new events.EventEmitter();
var connectHandler = function() {
    console.log('connecting success!');
    eventEmitter.emit('dataReceive');
}
eventEmitter.on('connect',connectHandler);
eventEmitter.on('dataReceive',function() {
    console.log('data receiving success!');
});
eventEmitter.emit('connect');
console.log('do well!');