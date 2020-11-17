import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    padding-top: 2rem;
    align-items: flex-start;
  }
`
