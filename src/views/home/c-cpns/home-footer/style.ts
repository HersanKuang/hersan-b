import styled from 'styled-components'

export const FooterWrapper = styled.div`
  max-width: 800px;
  width: 60%;
  box-sizing: border-box;
  margin: 0 auto;
  ${(props) => props.theme.mixins}
  background-color: ${(props) => props.theme.backgroundColor.body};

  .icp {
    margin: 2rem 0 4.6rem;
    color: #707070;
    a {
      margin-left: 4px;
      color: #707070;
    }
  }

  .fz {
    font-size: 16px;
  }
`
