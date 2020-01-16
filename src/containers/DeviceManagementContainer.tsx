import { Container } from 'unstated-typescript'

type DeviceManagementState = {
  isLoaded: boolean,
  devices: Array<object>,
}

class DeviceManagement extends Container<DeviceManagementState> {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      devices: [],
    }
    this.addDevices = this.addDevices.bind(this)
    this.getData = this.getData.bind(this)
    this.getData().then((data) => {
      console.log('DATA', data)
      this.setState({
        devices: data.SlaveDevices,
      })
    })
  }

  async getData() {
    const response = await fetch('http://localhost:8000/cluster_info', {
      method: 'GET',
    })

    console.log(response)

    return await response.json()
  }

  addDevices(newdevices) {
    this.setState({
      devices: this.state.devices.concat(newdevices)
    })
  }
}

export default DeviceManagement
