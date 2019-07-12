import React, { Component } from 'react'
import styles from './classfiy.scss';
import { Button } from 'antd';
export class Classfiy extends Component {
    render() {
        return (
            <div className="classPage">
                <h4>试题分类</h4>
                <div className="maines">
                    <Button className="btn" type="添加类型">+添加类型</Button>
                    <div>
                        <ul className="ulTitle">
                            <li>类型ID</li>
                            <li>类型名称</li>
                            <li>操作</li>
                        </ul>
                        <div>
                            <ul className="ulList">
                                <li>likhjnbk</li>
                                <li>简答题</li>
                                <li></li>
                            </ul>
                            <ul className="ulList">
                                <li>lskjbk</li>
                                <li>代码补全</li>
                                <li></li>
                            </ul>
                            <ul className="ulList">
                                <li>llknmbk</li>
                                <li>填空题</li>
                                <li></li>
                            </ul>
                            <ul className="ulList">
                                <li>sdlknk</li>
                                <li>手写代码</li>
                                <li></li>
                            </ul>
                        </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}
export default Classfiy
