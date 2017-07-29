'use strict';

var _nodeSes = require('node-ses');

var client = (0, _nodeSes.createClient)({
  key: process.env.AWS_KEY,
  secret: process.env.AWS_SECRET
});


var contact = function contact(req, res) {
  if (!req.body.name || !req.body.email || !req.body.phoneNumber) {
    return res.send({
      statusCode: 400,
      msg: "Missing one or more fields."
    });
  }

  var message = '\n    Name: ' + req.body.name + '<br />\n    Email: ' + req.body.email + '<br />\n    Phone: ' + req.body.phoneNumber + '<br />\n    Company: ' + req.body.company + '<br />\n    Preferred Method of Contact: ' + req.body.contactMethod + '<br />\n    Message: <p>' + req.body.msg + '</p>\n  ';

  client.sendEmail({
    from: 'itsupport@pacificexpeditors.com',
    to: 'solutions@pacificexpeditors.com',
    subject: 'Email from ' + req.body.name,
    message: message
  }, function (err, data, info) {
    if (err) {
      return res.send({
        statusCode: 400,
        msg: err
      });
    }

    res.send({
      statusCode: 200,
      msg: "Email sent."
    });
  });
};

module.exports = contact;