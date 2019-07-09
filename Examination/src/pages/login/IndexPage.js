import React,{useState,useEffect} from "react";
import {connect} from "dva";
import { Form, Icon, Input, Button, Checkbox } from 'antd';
import "./IndexPage.css"

function LoginPage(props){
    console.log(props);
    //模拟componentDidmount
    useEffect(()=>{
        // console.log("执行");
        props.login({user_name: 'chenmanjie', user_pwd: 'Chenmanjie123!'});
    },[])
    //表单
    let handleSubmit = () => {
        props.form.validateFields((err, values) => {
          if (!err) {
            props.login({user_name: values.username, user_pwd: values.password});
            console.log('Received values of form: ', values);
          }
        });
    }
    const { getFieldDecorator } = props.form;
    return (
    //      <div className="login">
    //      <div className="loginbox">
    //         <Input
    //             placeholder="用户名"
    //             prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
    //             suffix={
    //             <Tooltip title="Extra information">
    //                 <Icon type="info-circle" style={{ color: 'rgba(0,0,0,.45)' }} />
    //             </Tooltip>
    //             }
    //         />
    //         <Input.Password placeholder="用户密码" />
    //         <Button type="primary" block> 登录 </Button>
    //     </div>  
    // </div>
       <div className="login">
          <Form onSubmit={handleSubmit} className="login-form">
            <Form.Item>
              {getFieldDecorator('username', {
                rules: [{ required: true, message: 'Please input your username!' }],
              })(
                <Input
                  prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  placeholder="Username"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('password', {
                rules: [{ required: true, message: 'Please input your Password!' }],
              })(
                <Input
                  prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
                  type="password"
                  placeholder="Password"
                />,
              )}
            </Form.Item>
            <Form.Item>
              {getFieldDecorator('remember', {
                valuePropName: 'checked',
                initialValue: true,
              })(<Checkbox>Remember me</Checkbox>)}
              <a className="login-form-forgot" href="">
                Forgot password
              </a>
              <Button type="primary" htmlType="submit" className="login-form-button">
                Log in
              </Button>
              Or <a href="">register now!</a>
            </Form.Item>
          </Form>
       </div> 
    )
}
   

const mapStateToProps=state=>{
    return {...state.login}
}
const mapDispatchToPorps=dispatch=>{
    return {
        login:payload=>{
            dispatch({
                type:"login/login",
                payload
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToPorps)(Form.create()(LoginPage));