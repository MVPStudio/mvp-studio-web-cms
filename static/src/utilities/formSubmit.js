export const formSubmit = async (
  values,
  actions,
  setFormState,
  setSubmitResponse,
) => {
  const response = await (await fetch(
    '/api/form', // TODO: Fetch from proper API route
    {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(values),
    },
  )).json();
  if (response.statusCode === 200) {
    actions.resetForm();
  }
  setFormState(true);
  setSubmitResponse(response.message);
  actions.setSubmitting(false);
};
