var testsContext = require.context('./test', true, /spec\.js$/);
testsContext.keys().forEach(testsContext);

module.exports = testsContext;