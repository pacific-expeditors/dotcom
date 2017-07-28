'use strict';

var _sendmail = require('sendmail');

var _sendmail2 = _interopRequireDefault(_sendmail);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sendMail = function sendMail(req, res) {
  var html = '\n    Name: ' + req.body.name + '\n    Email: ' + req.body.email + '\n    Phone: ' + req.body.phone + '\n    Company: ' + req.body.company + '\n    Preferred Method of Contact: ' + req.body.contactMethod + '\n    Message: ' + req.body.msg + '\n  ';

  (0, _sendmail2.default)({
    from: req.body.email,
    to: 'itsupport@pacificexpeditors.com',
    subject: 'Email from ' + req.body.email,
    html: html
  }, function (err, reply) {
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


module.exports = sendMail;