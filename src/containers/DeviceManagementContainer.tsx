import { Container } from 'unstated-typescript'

type DeviceManagementState = {
  isLoaded: boolean,
  devices: Array<number>,
}

class DeviceManagement extends Container<DeviceManagementState> {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      devices: [],
    }
    this.addDevices = this.addDevices.bind(this)
  }

  addDevices(newdevices) {
    this.setState({
      devices: this.state.devices.concat(newdevices)
    })
  }
}

export default DeviceManagement
