/* @flow */
import { createClient } from 'node-ses';

const client = createClient({
  key: process.env.AWS_KEY,
  secret: process.env.AWS_SECRET
});

const contact = (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.phoneNumber) {
    return res.send({
      statusCode: 400,
      msg: "Missing one or more fields."
    });
  }
  
  const message = `
    Name: ${req.body.name}<br />
    Email: ${req.body.email}<br />
    Phone: ${req.body.phoneNumber}<br />
    Company: ${req.body.company}<br />
    Preferred Method of Contact: ${req.body.contactMethod}<br />
    Message: <p>${req.body.msg}</p>
  `;

  client.sendEmail({
    from: 'itsupport@pacificexpeditors.com',
    to: 'solutions@pacificexpeditors.com',
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
