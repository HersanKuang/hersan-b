import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  padding: 0 2rem 0 10vh;
  box-sizing: border-box;
  height: ${(props) => props.theme.height.header};
  background-color: ${(props) => props.theme.backgroundColor.header};

  .title {
    width: 100%;
    height: 100%;
    flex: 1;

    .logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
      img {
        height: 90%;
      }
      h1 {
        margin-left: 4px;
        font-size: 24px;
        color: ${(props) => props.theme.text.main};
      }
    }
  }

  .options {
    justify-content: flex-end;
  }
`
