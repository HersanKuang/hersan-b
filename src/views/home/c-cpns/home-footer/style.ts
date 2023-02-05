import styled from 'styled-components'

export const FooterWrapper = styled.div`
  ${(props) => props.theme.mixins}
  background-color: ${(props) => props.theme.backgroundColor.body};
`
