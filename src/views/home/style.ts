import styled from 'styled-components'

export const HomeWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  background-color: ${(props) => props.theme.backgroundColor.body};
  ::-webkit-scrollbar {
    width: 0.5rem;
    height: 0.5rem;
  }
  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.backgroundColor.header};
  }
  ::-webkit-scrollbar-thumb {
    background-color: #87878d;
  }
`
