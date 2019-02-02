import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import ProjectForm from '../forms/projectForm';

const FormTest = () => (
  <Layout>
    <SEO title="Form Tests" />
    <h1 style={{textAlign: "center"}}>Forms Test Page</h1>
    <ProjectForm />
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default FormTest
