import * as React from 'react'
import { FunctionComponent, useState } from 'react'
import { Button } from '@material-ui/core'
import Draggable from "react-draggable"
import styled from 'styled-components'

const StyledDiv = styled.div`
  display: inline-block;
`


const SolenoidButton = ({ solenoid }) => {
  const [isOpen, setIsOpen] = useState(false)
  console.log(solenoid)

  const triggerSolenoid = () => {
    if (isOpen) {
      solenoid.close()
      setIsOpen(false)
    } else {
      solenoid.open()
      setIsOpen(true)
    }
  }


  return (
    <Draggable
      handle={".handle"}
      defaultPosition={{ x: 0, y: 0 }}
      position={null}
      grid={[25, 25]}
      scale={1}
      onStart={this.handleStart}
      onDrag={this.handleDrag}
      onStop={this.handleStop}
      key={solenoid.name + solenoid.uid}>
      <StyledDiv>
        <div className="handle">X</div>
        <Button
          variant="outlined"
          onMouseDown={triggerSolenoid}
          onMouseUp={triggerSolenoid}>
          <h4>{solenoid.name}</h4>
        </Button>
      </StyledDiv>

    </Draggable>
  )
}

export default SolenoidButton