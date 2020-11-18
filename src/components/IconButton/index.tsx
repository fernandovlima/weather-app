// Button.tsx
import React from 'react'
import styled from 'styled-components'

interface IButtonProps {
  children?: React.ReactNode
  props?: any
  onClick?: any
}

const IconButton: React.FC<IButtonProps> = ({
  onClick,
  children,
  ...props
}) => {
  return (
    <ButtonStyles {...props} onClick={onClick}>
      {children}
    </ButtonStyles>
  )
}

export default IconButton

const ButtonStyles = styled.div`
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }
`
