import { Container } from 'unstated-typescript'

type DeviceManagementState = {
  isLoaded: boolean,
  slaveMicrocontrollers: Array<object>,
  master: Array<object>,
  clusterName: String
}

class DeviceManagement extends Container<DeviceManagementState> {
  constructor() {
    super()
    this.state = {
      isLoaded: false,
      master: [],
      slaveMicrocontrollers: [],
      clusterName: ''
    }

    this.getMicrocontrollers = this.getMicrocontrollers.bind(this)
    this.getData = this.getData.bind(this)
    this.getData().then((data) => {
      console.log('DATA', data)
      this.setState({
        slaveMicrocontrollers: data.SlaveMicrocontrollers,
        master: data.Master,
        clusterName: data.Name
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

  getMicrocontrollers() {
    if (this.state.slaveMicrocontrollers) {
      return [...this.state.master, ...this.state.slaveMicrocontrollers]
    }

    return [this.state.master]

  }
}

export default DeviceManagement
