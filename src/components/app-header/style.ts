import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  position: fixed;
  display: flex;
  width: 100vw;
  padding: 0 2rem 0 10vh;
  box-sizing: border-box;
  height: ${(props) => props.theme.height.header};
  background-color: ${(props) => props.theme.backgroundColor.header};
  z-index: 9;

  .title {
    height: 100%;
    display: flex;

    .logo {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      width: 100%;
      height: 100%;
      img {
        height: 60%;
      }
      h1 {
        margin-left: 12px;
        font-size: 24px;
        color: ${(props) => props.theme.text.main};
      }
    }
  }

  .options {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    flex: 1;

    .left {
      box-sizing: border-box;
      padding-right: 0.8rem;
      border-right: 1.5px solid #363636;
    }

    .right {
      margin-left: 0.8rem;
      .item {
        cursor: pointer;
      }
    }

    .item {
      margin: 0.8rem;
      color: ${(props) => props.theme.text.main};
      &:hover {
        color: ${(props) => props.theme.text.headerHover};
      }
    }
  }
`
