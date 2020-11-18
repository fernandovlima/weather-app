import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: calc(100vh - 60px);
  align-items: center;
  justify-content: center;
  transition: all 0.5s;

  @media (max-width: 800px) {
    padding-top: 2rem;
    align-items: flex-start;
    height: 360px;
  }
`

export const SearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 80%;
  min-height: 80%;
  background-color: ${props => props.theme.colors.surface};
  border-radius: 0.5rem;
  box-shadow: 0px 2px 6px ${props => props.theme.colors.shadow};

  input {
    background: ${props => props.theme.colors.surfacelight};
    border-radius: 0.5rem;
    border: none;
    width: 80%;
    height: 2.5rem;
    outline: none;
    font-size: 1.25rem;
    color: ${props => props.theme.colors.text};
    padding: 0.5rem 1rem;
    transition: all 0.3s;

    ::placeholder {
      color: ${props => props.theme.colors.text};
    }

    :placeholder-shown label {
      opacity: 0;
      visibility: hidden;
      -webkit-transform: translateY(-4rem);
      transform: translateY(-4rem);
    }
  }

  label {
    display: block;
    width: 100%;
    transition: all 0.3s;
    transform: translateY(0rem);
    text-align: start;
    margin-top: 0.7rem;
  }
`
