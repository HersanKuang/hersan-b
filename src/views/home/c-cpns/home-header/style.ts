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

    @font-face {
      font-family: 'iconfont';
      src: url(${require('@/assets/iconfont/iconfont.woff2?t=1678198418515')})
          format('woff2'),
        url(${require('@/assets/iconfont/iconfont.woff?t=1678198418515')})
          format('woff'),
        url(${require('@/assets/iconfont/iconfont.ttf?t=1678198418515')})
          format('truetype');
    }
    .iconfont {
      font-family: 'iconfont' !important;
      font-size: 17px;
      font-style: normal;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    .left {
      box-sizing: border-box;
      padding-right: 0.8rem;
      border-right: 1.5px solid #363636;
    }

    .right {
      margin-left: 0.8rem;
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
