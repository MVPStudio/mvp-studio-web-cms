export const formSubmit = async (
  values,
  actions,
  setFormState,
  setSubmitResponse,
) => {
  let response;
  if (values.formName === 'Volunteer_Form') {
    response = await (await fetch(
      '/api/volunteer',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(values),
      },
    ));
    console.log(response)
  }
  // if (response.statusCode === 200) {
  //   actions.resetForm();
  // }
  actions.resetForm();
  setFormState(true);
  // setSubmitResponse(response.message);
  setSubmitResponse("Thanks")
  actions.setSubmitting(false);
};
