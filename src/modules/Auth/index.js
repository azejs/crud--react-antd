import React, { Component } from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import {Link} from "react-router-dom";
import AuthStyleWrapper from './styled';
import { Button, Form, Input } from 'antd';
import Img from '../../components/Img';
import logo from '../../images/PLYA.png'
import {connect} from "react-redux";
import {
  hideMessage,
  showAuthLoader,
  userSignIn,
 
} from "../../appRedux/actions/Auth";
class SignIn extends Component {
  

   onFinish = (values) => {
    // const {dispatch}= this.props
    console.log('Success:', values);
    this.props.showAuthLoader();
    this.props.userSignIn(values);
  };

   onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.form.validateFields((err, values) => {
      if (!err) {
        this.props.showAuthLoader();
        this.props.userSignIn(values);
      }
    });
  };
  componentDidUpdate() {
    if (this.props.showMessage) {
      setTimeout(() => {
        this.props.hideMessage();
      }, 100);
    }
    if (this.props.authUser !== null) {
      this.props.history.push('/hotel');
    }
  }
  render() {
  console.log('props------------',this.props)
    return (
      <AuthStyleWrapper className="isoSignInPagee">
         <div className="isoLoginContentWrapper">
        <div className="isoLoginContent">
          <div className="isoLogoWrapper">
            <Link to="/">
              <Img alt="Goerso" src={logo} />
            </Link>
          </div>
            <div className="isoSignInForm">
            <div className="isoSignInForm"></div>
                <div>
                <Form
                name="basic"
                labelCol={{
                  span: 8,
                }}
                wrapperCol={{
                  span: 16,
                }}
                initialValues={{
                  remember: true,
                }}
                onFinish={(values)=>this.onFinish(values)}
                onFinishFailed={(errorInfo)=>this.onFinishFailed(errorInfo)}
                autoComplete="off"
              >
                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your username!',
                    },
                  ]}
                >
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    {
                      required: true,
                      message: 'Please input your password!',
                    },
                  ]}
                >
                  <Input.Password />
                </Form.Item>


                <Form.Item
                  wrapperCol={{
                    offset: 8,
                    span: 16,
                  }}
                >
                  <Button type="primary" htmlType="submit">
                    Submit
                  </Button>
                </Form.Item>
              </Form>
                </div>
            </div>
       </div>
       </div>
       </AuthStyleWrapper>
    );
  }
}

SignIn.propTypes = {
  dispatch: PropTypes.func,
};

 

const mapStateToProps = ({auth}) => {
  const {loader, alertMessage, showMessage, authUser} = auth;
  return {loader, alertMessage, showMessage, authUser}
};
export default connect(mapStateToProps, {
  userSignIn,
  hideMessage,
  showAuthLoader,
 
})(SignIn);
 