import * as React from 'react'

import Draggable from "react-draggable"

const SolenoidButton = ({ solenoid }) => {
  return (
    <Draggable
      handle=".handle"
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={this.handleStart}
      onDrag={this.handleDrag}
      onStop={this.handleStop}
      key={solenoid.name + solenoid.uid}>
      <div>
        <h4>{solenoid.name}</h4>
      </div>
    </Draggable>
  )
}

export default SolenoidButton