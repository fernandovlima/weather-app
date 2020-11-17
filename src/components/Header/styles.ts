import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  background: ${props => props.theme.colors.header};
  width: 100vw;
  height: 60px;
  padding: 1rem 2rem;
  align-items: center;
  justify-content: space-between;

  -webkit-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  -moz-box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.2);
`
export const LeftContainer = styled.div`
  display: flex;
  flex-direction: column;

  h3 {
    margin-bottom: 0.25rem;
  }

  p {
    font-size: 14px;
  }
`
