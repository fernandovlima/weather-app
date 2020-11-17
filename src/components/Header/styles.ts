import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background: ${props => props.theme.colors.header.dark};
  width: 100vw;
  height: 60px;
  padding: 1rem;

  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 1);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 1);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 1);
`
