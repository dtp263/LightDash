import React from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../components/shared/PageWrapper'
import Header from '../components/shared/PageHeader'

const About = () => (
  <Wrapper>
    <Header>About Page</Header>
    <Link to='/'>Go to home page</Link>
  </Wrapper>
)

export default About
