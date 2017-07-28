/* @flow */
const sendmail = require('sendmail')();

const contact = (req, res) => {
  const html = `
    Name: ${req.body.name}
    Email: ${req.body.email}
    Phone: ${req.body.phoneNumber}
    Company: ${req.body.company}
    Preferred Method of Contact: ${req.body.contactMethod}
    Message: ${req.body.msg}
  `;

  sendmail({
    from: 'itsupport@pacificexpeditors.com',
    to: 'itsupport@pacificexpeditors.com',
    subject: `Email from ${req.body.name}`,
    html
  }, function(err, reply) {
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
