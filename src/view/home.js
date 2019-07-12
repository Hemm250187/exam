
import React, { Component } from 'react';
import { Route, Link} from 'dva/router';
import { Layout, Menu } from 'antd';
import RouerView from '../router/router';
import AddQuestion from './question/addQuestion';
import styles from './home.scss';
import Classfiy from './question/classfiy';
import ExamQuestion from './question/examQuestion'
import { Select } from 'antd';
const { Option, OptGroup } = Select;
const {  Sider } = Layout;
const { SubMenu } = Menu;
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
            <Layout>
            {/* 左侧 */}
                <Sider className="left" collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
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
                            <Menu.Item key="2"><Link to="/home/classfiy">试题分类</Link></Menu.Item>
                            <Menu.Item key="3"><Link to="/home/examQuestion">查看试题</Link></Menu.Item>
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
            <div className='rightList'>
                    <Route path="/home/addQuestion" component={AddQuestion}></Route>
                    <Route path="/home/classfiy" component={Classfiy}></Route>
                    <Route path="/home/examQuestion" component={ExamQuestion}></Route>
            </div>
            </Layout> 
        </div>
    )
  }
}
export default Home

