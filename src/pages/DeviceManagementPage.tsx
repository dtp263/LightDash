import * as React from 'react'
import { Subscribe } from 'unstated-typescript'
import { Link } from 'react-router-dom'
import { List, ListItem } from '@material-ui/core'
import DeviceManagement from '../containers/DeviceManagementContainer'
import Wrapper from '../components/shared/PageWrapper'
import PageHeader from '../components/shared/PageHeader'

const DeviceManagementPage = () => (
  <Wrapper>
    <PageHeader />
    <List>
      <Subscribe to={[DeviceManagement]}>

        {deviceManager =>
          deviceManager.state.devices.map((device) => (
            <ListItem button key={device.NodeId}>
              {device.NodeIPAddr}:{device.Port}
            </ListItem>
          ))
        }
      </Subscribe>
    </List>
  </Wrapper >
)

export default DeviceManagementPage
