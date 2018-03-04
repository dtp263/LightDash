import React from 'react'
import { Subscribe } from 'unstated'
import { Link } from 'react-router-dom'
import CounterContainer from '../containers/CounterContainer'
import Wrapper from '../components/shared/PageWrapper'
import Header from '../components/shared/PageHeader'
import Button from '../components/Home/Button'

const Home = () => (
  <Wrapper>
    <Header>Home Page</Header>
    <Link to='/about'>Go to about page</Link>
    <Subscribe to={[CounterContainer]} >
      {counter => (
        <div>
          <h1 style={{ fontSize: '10rem', margin: '5% 0' }}>{counter.state.count}</h1>
          <Button onClick={() => counter.increment()} text='Increment' />
          <Button onClick={() => counter.decrement()} text='Decrement' />
        </div>
      )}
    </Subscribe>
  </Wrapper>
)

export default Home
