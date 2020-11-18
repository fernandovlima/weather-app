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
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem;
  min-width: 33%;
  min-height: 80%;
  background-color: ${props => props.theme.colors.surface};
  border-radius: 0.5rem;
  box-shadow: 0px 2px 6px ${props => props.theme.colors.shadow};
`
export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`
export const HeaderInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  svg {
    size: 24px;
    margin-right: 0.5rem;
  }

  :last-child {
    align-self: flex-end;
    justify-content: flex-end;
  }
`
