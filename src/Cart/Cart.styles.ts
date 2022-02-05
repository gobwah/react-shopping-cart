import { IconButton } from '@material-ui/core'
import styled from 'styled-components'

export const Wrapper = styled.aside`
  font-family: Arial, Helvetica, sans-serif;
  width: 500px;
  padding: 20px;

  @media(max-width: 600px) {
    width: auto;
  }
`

export const StyledButton = styled(IconButton)`
  position: absolute;
  z-index: 100;
  right: 20px;
  top: 20px;
`
