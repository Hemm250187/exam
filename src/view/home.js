
import React, { Component } from 'react';
import { Router, Route, Switch ,Redirect, NavLink,Link} from 'dva/router';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import RouerView from '../router/router';
import AddQuestion from './question/addQuestion';
import styles from './home.scss';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

// import styles from './IndexPage.scss';
 class Home extends React.Component {
  state = {
    collapsed: false,
  }
  onCollapse = collapsed => {
    this.setState({ collapsed });
  }
  render() {
    return (
        <div className="wrapper">

      
        <div className='leftList'>
      <Layout style={{ minHeight: '100vh' }}>
      {/* <div>{RouerView(this.props.routes)}</div> */}
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <SubMenu
                key="sub1"
                title={
                    <span>
                        <span>试题管理</span>
                    </span>
                }
                >
                <Menu.Item key="1"><Link to="/home/addQuestion">添加试题</Link></Menu.Item>
                <Menu.Item key="2">试题分类</Menu.Item>
                <Menu.Item key="3">查看试题</Menu.Item>
                </SubMenu>
            <SubMenu
                key="sub2"
                title={
                    <span>
                        <span>用户管理</span>
                    </span>
                }
                >
                <Menu.Item key="4">添加用户</Menu.Item>
                <Menu.Item key="5">用户展示</Menu.Item>
                </SubMenu>
                <SubMenu
                key="sub3"
                title={
                    <span>
                        <span>考试管理</span>
                    </span>
                }
                >
                <Menu.Item key="6">添加考试</Menu.Item>
                <Menu.Item key="7">试卷列表</Menu.Item>
                </SubMenu>
            <SubMenu
                key="sub4"
                title={
                    <span>
                        <span>班级管理</span>
                    </span>
                }
                >
                <Menu.Item key="8">班级管理</Menu.Item>
                <Menu.Item key="9">教室管理</Menu.Item>
                <Menu.Item key="10">学生管理</Menu.Item>
                </SubMenu>
                
            <SubMenu
                key="sub2"
                title={
                    <span>
                        <span>阅卷管理</span>
                    </span>
                }
                >
                <Menu.Item key="11">待批班级</Menu.Item>
                </SubMenu>
          
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>Bill is a cat.</div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>
      </Layout>
      </div>
      <div className='rightList'>
          <Route path="/home/addQuestion" component={AddQuestion}></Route>
     
      </div>
      </div>
    )
  }
}
export default Home

