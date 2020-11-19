import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContentContainer = styled.div`
  display: flex;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: space-evenly;
  }
`
export const LoadingWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 60px);
`
