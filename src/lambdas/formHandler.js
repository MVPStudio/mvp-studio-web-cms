const Airtable = require('airtable')


const saveContact = async (data) => {
  return new Promise  ((resolve, reject) => {
    const { AIRTABLE_API_KEY, AIRTABLE_BASE_ID } = process.env

    Airtable.configure({
      AIRTABLE_API_KEY
    })

    const base = Airtable.base(AIRTABLE_BASE_ID)
    
    // formName directs data to correct base
    base(data.formName).create(data, err => {
      if (err) return reject(err);
      resolve();
    })
  })
}

export async function handler (event) {
  try {
    const data = JSON.parse(event.body)
    await saveContact(data)
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: "Apparently this saved to airtable..."
      })
    }
  } catch (error) {
    console.log(error)
    return {
      statusCode: 500,
      body: error.message
    }
  }
}