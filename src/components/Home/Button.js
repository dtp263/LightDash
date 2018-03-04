import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { darken } from 'polished'

const Element = styled.button`
  border: none;
  background-color: #673AB7;
  color: #fff;
  padding: 10px 30px;
  margin: 0 10px;
  outline: none;
  cursor: pointer;
  border-radius: 3px;
  &:hover {
    background-color: ${darken(0.1, '#673AB7')}
  }
`

const Button = ({ onClick, text }) => (
  <Element onClick={onClick}>{text}</Element>
)

Button.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired
}

export default Button
