require('dotenv').config();
const axios = require('axios');

const { RECAPTCHA_SECRET } = process.env;

const saveContact = async data => {
  // formName directs data to correct base
  const { formName } = data;
  // discard unnecessary form data
  delete data.formName;
  delete data.recaptcha;
  // send form data
  // TODO: POST data to our db
  // base(formName).create(data, err => {
  //   if (err) throw new Error(err);
  // });
};
const verifyRecaptcha = async recaptcha => {
  const secret = RECAPTCHA_SECRET;
  const response = await axios.post(
    `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptcha}`,
    {},
  );

  if (!response.data.success) {
    throw new Error(response.data['error-codes']);
  }
  return response.data;
};

module.exports = async function handler(event) {
  try {
    await verifyRecaptcha(event.recaptcha);
    await saveContact(event);
    return {
      statusCode: 200,
      message: 'Thanks and talk to you soon!',
    };
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      message: 'Hmmmm... Please try again or send us an email. Sorry!',
    };
  }
};
