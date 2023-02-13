import styled from 'styled-components'

export const InfoWrapper = styled.div`
  .profile {
    display: flex;
    justify-content: flex-start;
    width: 100%;
    height: 100%;

    .avatar {
      max-width: 6rem;
      min-width: 6rem;
      margin: 0 auto;
      padding: 8px 0 0 20px;
      img {
        width: 100%;
        height: 100%;
        border-radius: 6px;
      }
    }

    .about-me {
      display: flex;
      flex-direction: column;
      align-items: center;
      flex: 1;
      box-sizing: border-box;
      padding: 28px 0 18px;
      .desc {
        width: 42ch;
        margin: 0 auto;
        font: 600 20px 'Consolas', 'Inconsolata', monospace;
        border-right: 0.16rem solid;
        white-space: nowrap;
        overflow: hidden;
        animation: typing 10s steps(42, end),
          blink-caret 0.2s step-end infinite alternate;

        @keyframes typing {
          from {
            width: 0;
          }
        }
        @keyframes blink-caret {
          50% {
            border-color: transparent;
          }
        }
      }

      .connect {
        display: flex;
        justify-content: center;
        align-items: center;
        margin: auto 0;
        a.iconfont {
          display: inline-block;
          text-align: center;
          width: 1.25em;
          font-size: 1.5rem;
          opacity: 0.9;
          color: ${(props) => props.theme.text.main};
          &:hover {
            color: ${(props) => props.theme.text.headerHover};
          }
        }
        .item {
          font-size: 1.25rem !important;
        }
      }
    }
  }
`
