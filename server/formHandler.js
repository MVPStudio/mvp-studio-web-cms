require('dotenv').config();
const Airtable = require('airtable');
const axios = require('axios');

const { GATSBY_AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;

const saveContact = async data =>
  new Promise((resolve, reject) => {
    Airtable.configure({
      apiKey: GATSBY_AIRTABLE_API_KEY,
    });
    const base = Airtable.base(AIRTABLE_BASE_ID);

    // formName directs data to correct base
    const { formName } = data;
    delete data.formName;
    base(formName).create(data, err => {
      if (err) return reject(err);
      resolve();
    });
  });

const verifyRecaptcha = async recaptcha =>
  new Promise(async (resolve, reject) => {
    const secret = '6LccvJQUAAAAAG7RMa6KHVDpiXD_hBJGQWu40Jqs';
    const response = await axios
      .post(
        `https://www.google.com/recaptcha/api/siteverify?secret=${secret}&response=${recaptcha}`,
        {},
      )
      .then(res => res)
      .catch(error => {
        console.log(error);
        reject(error);
      });
    if (!response.data.success) return reject(response.data['error-codes']);
    resolve();
  });

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
