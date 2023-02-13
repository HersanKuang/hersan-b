import styled from 'styled-components'

export const ContentWrapper = styled.div`
  max-width: 800px;
  width: 60%;
  box-sizing: border-box;
  margin: 0 auto;
  padding-top: 2rem;
  color: ${(props) => props.theme.text.main};
  ${(props) => props.theme.mixins}
`
