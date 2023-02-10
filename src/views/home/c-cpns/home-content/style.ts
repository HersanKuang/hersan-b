import styled from 'styled-components'

export const ContentWrapper = styled.div`
  ${(props) => props.theme.mixins}
  background-color: ${(props) => props.theme.backgroundColor.body};

  .main {
    position: relative;
    max-width: 1200px;
    width: 60%;
    margin: 0 auto;
    padding-top: ${(props) => props.theme.height.header};
  }
`
