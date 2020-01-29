import API from "../utils/Solenoid"

class Solenoid {
  uid: string
  name: string
  mcAddress: string
  type: string

  constructor(solenoid: any, mc: any) {
    this.uid = solenoid.UID ? solenoid.UID : ''
    this.name = solenoid.Name ? solenoid.Name : ''
    this.type = solenoid.Type ? solenoid.Type : ''
    this.mcAddress = mc.Host && mc.Port ? (mc.Host + mc.Port) : ''
  }

  open() {

  }

  close() {

  }

  disable() {

  }

}

export default Solenoid