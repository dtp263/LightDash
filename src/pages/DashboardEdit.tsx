import * as React from 'react'
import { Subscribe } from 'unstated-typescript'
import { Link } from 'react-router-dom'
import { List, ListItem, Container } from '@material-ui/core'
import DeviceManagement from '../containers/DeviceManagementContainer'
import Wrapper from '../components/shared/PageWrapper'
import PageHeader from '../components/shared/PageHeader'
import DeviceCard from '../components/device_management/DeviceCard'

const DashboardEdit = () => (
  <Wrapper>
    <PageHeader />
    <Container maxWidth="md">
      <List>
        <Subscribe to={[DeviceManagement]}>

          {deviceManager =>
            deviceManager.state.devices.map((device) => (
              <ListItem key={device.NodeId}>
                <DeviceCard>
                  {device.Host}:{device.Port}
                </DeviceCard>

              </ListItem>
            ))
          }
        </Subscribe>
      </List>
    </Container>
  </Wrapper >
)

export default DashboardEdit
