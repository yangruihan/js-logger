const jslogger = require('../../').default;

jslogger.useDefaults();
jslogger.info('hello world!');
jslogger.error('bang!');

const namedLogger = jslogger.get('myLogger');
namedLogger.info('hello from namedLogger :)');

// Install a custom log handler which pushes to an Array instead of
// writing to the console.
const receivedMessages = [];
const customHandler =  (messages, context) => {
    receivedMessages.push(messages);
}
jslogger.setHandler(customHandler);
jslogger.info('custom handler test');
 receivedMessages.forEach(element => {
    console.log('received message', ...element);
 });

 // Install a custom log handler, based on the default one which prefixes
 // all log messages before writing to the console.
 const prefixedDefaultHandler = jslogger.createDefaultHandler({
     formatter: (messages, context) => {
         messages.unshift('my_prefix');
     }
 })
 jslogger.setHandler(prefixedDefaultHandler);
 jslogger.info('prefixed handler test');
