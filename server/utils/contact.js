/* @flow */
const ses = require('node-ses')({
  key: '',
  secret: ''
});

const contact = (req, res) => {
  const message = `
    Name: ${req.body.name}
    Email: ${req.body.email}
    Phone: ${req.body.phoneNumber}
    Company: ${req.body.company}
    Preferred Method of Contact: ${req.body.contactMethod}
    Message: ${req.body.msg}
  `;

  ses({
    from: 'itsupport@pacificexpeditors.com',
    to: 'itsupport@pacificexpeditors.com',
    subject: `Email from ${req.body.name}`,
    message
  }, function(err, data, info) {
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
