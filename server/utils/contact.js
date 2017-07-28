/* @flow */
import sendmail from 'sendmail';

const sendMail = (req, res) => {
  const html = `
    Name: ${req.body.name}
    Email: ${req.body.email}
    Phone: ${req.body.phone}
    Company: ${req.body.company}
    Preferred Method of Contact: ${req.body.contactMethod}
    Message: ${req.body.msg}
  `;

  sendmail({
    from: req.body.email,
    to: 'itsupport@pacificexpeditors.com',
    subject: 'Email from ' + req.body.email,
    html,
  }, (err, reply) => {
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
