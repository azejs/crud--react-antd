import styled from 'styled-components';
import { palette } from 'styled-theme';
import bgImage from '../../images/kech.jpg';
import WithDirection from '../../settings/withDirection';
import { rtl } from '../../helpers/utility';

const AuthStyleWrapper = styled.div`
width: 100%;
min-height: 100vh;
height: 100vh;
display: flex;
justify-content: ${props =>
  props.pathname === '/auth/invite' ? 'center' : 'flex-start'};
align-items: center;
position: relative;
background-image: url(${props =>
  props.pathname === '/auth/invite' ? '' : bgImage});
background-repeat: no-repeat;
background-position: center center;
background-size: cover;

&:before {
  content: '';
  width: 100%;
  height: 100%;
  display: flex;
  position: absolute;
  z-index: 1;
  top: 0;
  left: ${props => (props['data-rtl'] === 'rtl' ? 'inherit' : '0')};
  right: ${props => (props['data-rtl'] === 'rtl' ? '0' : 'inherit')};
}

.isoLoginContentWrapper {
  width: 500px;
  height: 100%;
  overflow-y: auto;
  z-index: 10;
  position: relative;
}

.isoLoginContent {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  padding: 70px 50px 26px 26px;
  position: relative;
  background-color: #ffff;

  @media only screen and (max-width: 767px) {
    width: 100%;
    padding: 70px 20px;
  }

  .isoLogoWrapper {
    width: 100%;
    display: flex;
    margin-bottom: 50px;
    justify-content: center;
    flex-shrink: 0;

    a {
      font-size: 24px;
      font-weight: 300;
      line-height: 1;
      text-transform: uppercase;
      color: ${palette('secondary', 2)};
    }
  }

  .isoSignInForm {
    width: 100%;
    display: flex;
    flex-shrink: 0;
    flex-direction: column;

    .isoInputWrapper {
      margin-bottom: 15px;

      &:last-of-type {
        margin-bottom: 0;
      }

      input {
        &::-webkit-input-placeholder {
          color: ${palette('grayscale', 0)};
        }

        &:-moz-placeholder {
          color: ${palette('grayscale', 0)};
        }

        &::-moz-placeholder {
          color: ${palette('grayscale', 0)};
        }
        &:-ms-input-placeholder {
          color: ${palette('grayscale', 0)};
        }
      }
    }

    .isoHelperText {
      font-size: 12px;
      font-weight: 400;
      line-height: 1.2;
      color: ${palette('grayscale', 1)};
      padding-left: ${rtl('inherit', '13px')};
      padding-right: ${rtl('13px', 'inherit')};
      margin: 15px 0;
      position: relative;
      display: flex;
      align-items: center;

      &:before {
        content: '*';
        color: ${palette('error', 0)};
        padding-right: 3px;
        font-size: 14px;
        line-height: 1;
        position: absolute;
        top: 2px;
        left: ${rtl('inherit', '0')};
        right: ${rtl('0', 'inherit')};
      }
    }

    .isoHelperWrapper {
      margin-top: 35px;
      flex-direction: column;
    }

    .isoOtherLogin {
      padding-top: 40px;
      margin-top: 35px;
      border-top: 1px dashed ${palette('grayscale', 2)};

      > a {
        display: flex;
        margin-bottom: 10px;

        &:last-child {
          margin-bottom: 0;
        }
      }

      button {
        width: 100%;
        height: 42px;
        border: 0;
        font-weight: 500;

        &.btnFacebook {
          background-color: #3b5998;

          &:hover {
            background-color: darken(#3b5998, 5%);
          }
        }

        &.btnGooglePlus {
          background-color: #dd4b39;
          margin-top: 15px;

          &:hover {
            background-color: darken(#dd4b39, 5%);
          }
        }

        &.btnAuthZero {
          background-color: #e14615;
          margin-top: 15px;

          &:hover {
            background-color: darken(#e14615, 5%);
          }
        }

        &.btnFirebase {
          background-color: ${palette('color', 5)};
          margin-top: 15px;

          &:hover {
            background-color: ${palette('color', 6)};
          }
        }
      }
    }

    .isoForgotPass {
      font-size: 12px;
      color: ${palette('text', 3)};
      margin-bottom: 10px;
      text-decoration: none;

      &:hover {
        color: ${palette('primary', 0)};
      }
    }

    button {
      font-weight: 500;
    }
  }
}
`;

export default WithDirection(AuthStyleWrapper);
