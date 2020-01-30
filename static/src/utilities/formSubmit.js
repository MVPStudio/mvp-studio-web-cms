export const formSubmit = async (
  values,
  actions,
  setFormState,
  setSubmitResponse,
) => {
  let response;
  if (values.formName === 'Volunteer_Form') {
    const data = {
      id: values.projectID,
      name: values.Name,
      email: values.Email,
      github: values.Github,
      roleCategory: values.Role_Category,
      experienceCategory: values.Experience_Category,
      whyText: values.Why_Text,
    }
    response = await (await fetch(
      '/api/volunteer',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )).json();
  } else if (values.formName === 'Project_Onboarding_Form') {
    const data = {
      project_name: values.projectName,
      po_name: values.poName,
      po_email: values.poEmail,
      description: values.description,
      description_link: values.descriptionLink,
      org_url: values.orgLink,
      logo_link: values.logoLink,
    }
    response = await (await fetch(
      '/api/project',
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      },
    )).json(); 
  }
  if (response.statusCode === 200) {
    actions.resetForm();
  }
  setFormState(true);
  setSubmitResponse(response.message);
  actions.setSubmitting(false);
};
