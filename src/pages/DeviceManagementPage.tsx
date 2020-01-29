import * as React from 'react'
import { Subscribe } from 'unstated-typescript'
import { Link } from 'react-router-dom'
import { List, ListItem, Container } from '@material-ui/core'
import DeviceManagement from '../containers/DeviceManagementContainer'
import Wrapper from '../components/shared/PageWrapper'
import PageHeader from '../components/shared/PageHeader'
import DeviceCard from '../components/device_management/DeviceCard'

import Draggable, { DraggableCore } from "react-draggable"

const DeviceManagementPage = () => (
  <Wrapper>
    <PageHeader />
    <Container maxWidth="md">
      <h1>Device Management Page</h1>
      <List>
        <Subscribe to={[DeviceManagement]}>

          {deviceManager => {

            console.log(deviceManager.getMicrocontrollers())
            const mcs = deviceManager.getMicrocontrollers()



            return (
              <Draggable
                // axis="x"
                handle=".handle"
                defaultPosition={{ x: 0, y: 0 }}
                position={null}
                grid={[25, 25]}
                scale={1}
                onStart={this.handleStart}
                onDrag={this.handleDrag}
                onStop={this.handleStop}>
                <div>
                  <div className="handle">Drag from here</div>
                  <div>This readme is really dragging on...</div>
                </div>
              </Draggable>
            )
          }



            // deviceManager.state.devices.map((device) => (
            //   <ListItem key={device.NodeId}>
            //     <DeviceCard>
            //       {device.NodeIPAddr}:{device.Port}
            //     </DeviceCard>

            //   </ListItem>
            // ))
          }
        </Subscribe>
      </List>
    </Container>
  </Wrapper >
)

export default DeviceManagementPage
