require('dotenv').config();
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const fromNumber = process.env.TWILIO_SENDER_PHONE_NUMBER;
const toNumber = process.env.TWILIO_RECEIVER_PHONE_NUMBER;
const messageBody = process.env.TWILIO_MESSAGE_TO_BE_RECEIVED;

const client = new twilio(accountSid, authToken);

const sendAnonymousSms = (to, from, body) => {
  client.messages.create({
    body: body,
    from: from,
    to: to
  }).then(message => console.log(`Message sent with SID: ${message.sid}`))
  .catch(error => console.error('Error sending message:', error));
};

sendAnonymousSms(toNumber, fromNumber, messageBody);