const sf = require('node-salesforce');

const conn = new sf.Connection({
  loginUrl: 'https://test.salesforce.com/'
});

conn.login('test', 'test', (err, userInfo) => {
  console.log(err, userInfo);
});
