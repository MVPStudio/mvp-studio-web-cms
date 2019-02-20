require('dotenv').config();
const Airtable = require('airtable');

const { GATSBY_AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env;

const saveContact = async data =>
  new Promise((resolve, reject) => {
    Airtable.configure({
      apiKey: GATSBY_AIRTABLE_API_KEY,
    });
    const base = Airtable.base(AIRTABLE_BASE_ID);

    // formName directs data to correct base
    base(data.formName).create(data, err => {
      if (err) return reject(err);
      resolve();
    });
  });

module.exports = async function handler(event) {
  try {
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
