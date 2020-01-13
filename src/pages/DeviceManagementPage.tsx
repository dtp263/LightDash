import * as React from 'react'
import { Subscribe } from 'unstated-typescript'
import { Link } from 'react-router-dom'
import DeviceManagement from '../containers/DeviceManagementContainer'
import Wrapper from '../components/shared/PageWrapper'
import PageHeader from '../components/shared/PageHeader'

const DeviceManagementPage = () => (
  <Wrapper>
    <PageHeader />
    <Link to='/'>Go to home page</Link>
    <Subscribe to={[DeviceManagement]}>
      {(DeviceManagement) => (
        <div>
          <h1>Something</h1>
        </div>
      )}
    </Subscribe>
  </Wrapper>
)

export default DeviceManagementPage
