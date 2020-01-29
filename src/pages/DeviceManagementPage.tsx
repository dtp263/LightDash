import * as React from 'react'
import { Subscribe } from 'unstated-typescript'
import { Link } from 'react-router-dom'
import { List, ListItem, Container } from '@material-ui/core'
import DeviceManagement from '../containers/DeviceManagementContainer'
import Wrapper from '../components/shared/PageWrapper'
import PageHeader from '../components/shared/PageHeader'

import SolenoidFactory from '../utils/factories/SolenoidFactory'
import Solenoid from '../utils/Solenoid'

import SolenoidButton from '../components/device_management/SolenoidButton'


import Draggable, { DraggableCore } from "react-draggable"

const DeviceManagementPage = () => {
  return (
    <Wrapper>
      <PageHeader />
      <Container maxWidth="md">
        <h1>Device Management Page</h1>
        <List>
          <Subscribe to={[DeviceManagement]}>

            {deviceManager => {
              console.log(deviceManager.getMicrocontrollers())
              const mcs = deviceManager.getMicrocontrollers()

              let sf = new SolenoidFactory

              const solenoids = sf.makeSolenoidsFromManyMcs(mcs);

              console.log('solenoids', solenoids)


              const solenoidComponents = solenoids.map(solenoid => {
                return (
                  <SolenoidButton solenoid={solenoid} />
                )
              })

              console.log(solenoidComponents)




              return (
                <>
                  {solenoidComponents}
                </>
              )
            }}
          </Subscribe>
        </List>
      </Container>
    </Wrapper >)
}

export default DeviceManagementPage
