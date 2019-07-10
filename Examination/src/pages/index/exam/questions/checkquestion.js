import React, { Component } from 'react'
import "../css/examPage.css"
import { Checkbox,Select,Button } from 'antd';
const CheckboxGroup = Checkbox.Group;
const { Option } = Select;
const plainOptions = ['javaScript上', 'javaScript下',"模块化开发","移动端开发","node基础","组件化开发(vue)","渐进式开发(react)","项目实战","javaScript高级","node高级"];
const defaultCheckedList = [];

export default class checkquestion extends Component {
    state = {
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
      };
    
      onChange = checkedList => {
        this.setState({
          checkedList,
          indeterminate: !!checkedList.length && checkedList.length < plainOptions.length,
          checkAll: checkedList.length === plainOptions.length,
        });
      };
    
      onCheckAllChange = e => {
        this.setState({
          checkedList: e.target.checked ? plainOptions : [],
          indeterminate: false,
          checkAll: e.target.checked,
        });
      };
    render() {
        return (
            <div className="seequest">
              <h2>查看试题</h2>
              <div className="navquest">
                <div className="course">
                    <div className="coursetype">课程类型：</div>
                    <div className="listcourse">
                        <div>
                            <Checkbox
                                indeterminate={this.state.indeterminate}
                                onChange={this.onCheckAllChange}
                                checked={this.state.checkAll}
                            >
                               All
                            </Checkbox>
                        </div>
                        <CheckboxGroup
                        options={plainOptions}
                        value={this.state.checkedList}
                        onChange={this.onChange}
                        />
                    </div>
                </div>
                <div className="other">
                    <div className="othertype">
                    <span>考试类型</span>：
                        <Select defaultValue="周考一" style={{ width: 120 }} >
                            <Option value="周考一">周考一</Option>
                            <Option value="周考二">周考二</Option>
                            <Option value="周考三" >
                            周考三
                            </Option>
                            <Option value="月考">月考</Option>
                        </Select>
                    </div>
                    <div className="othertype">
                    <span>题目类型：</span>
                        <Select defaultValue="简答题" style={{ width: 120 }} >
                            <Option value="简答题">简答题</Option>
                            <Option value="代码阅读题">代码阅读题</Option>
                            <Option value="代码补全" >代码补全</Option>
                            <Option value="修改BUG">修改BUG</Option>
                            <Option value="手写代码">手写代码</Option>
                        </Select>
                    </div>
                    <Button type="primary" icon="search">查询</Button>
                </div>
              </div>
              <div className="listquest">所有</div>
            </div>
        )
    }
}
