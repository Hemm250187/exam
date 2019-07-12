import React, { useEffect, useState } from 'react'
import {connect} from 'dva'
import Editor from 'for-editor'
//import { Router, Route, Switch ,Redirect} from 'dva/router';
import "../css/addQuestion.css"
import { Input ,Form, Button,Select,Modal} from 'antd';

const { Option} = Select;
function AddQuestion(props) {
    let {examtype,subject,questions}=props;
    console.log(props.location.params.exam)
    let editexam = props.location.params.exam;
    useEffect(() => {
        props.getQuestionTypes()
        props.getsubject()
        props.getExamType()
      }, [])

   const {getFieldDecorator}=props.form;

   return (
    <Form className="edit_exam">
        <h2>编辑试题</h2>
        <div className="edit_main">
            <div>
                <p>题目信息</p>
                <Form.Item>
                    <p>题干</p>
                    <Input value={editexam.title} placeholder="请输入题目标题，不超过20个字"/>
                    {/* {getFieldDecorator('titleText', {
                        rules: [{ required: true, message: '标题不能为空!' }],
                        })(
                        <Input
                         placeholder={editexam.title}
                        />,
                    )} */}
                </Form.Item>
            </div>
            <p>题目主题</p>
            <Form.Item>
             <Editor height='auto' value={editexam.questions_stem}/>
                {/* {getFieldDecorator('value', {
                rules: [{ required: true, message: "答案信息必填" }],
                initialValue: '',
                })(
                <Editor height='auto' value={editexam.questions_stem}/>
                )} */}
            </Form.Item>

            <div className="themList">
                <p>请选择考试类型：</p>
                <Select defaultValue={editexam.exam_name} style={{ width: 120 }} >
                    {examtype&&examtype.map((item)=><Option value={item.exam_name} key={item.exam_id}>{item.exam_name}</Option>)}
                </Select>
            </div>
            <div className="themList">   
                <p>请选择课程类型：</p>
                <Select defaultValue="js" style={{ width: 120 }} >
                    {subject&&subject.map((item)=><Option value={item.subject_text} key={item.subject_id}>{item.subject_text}</Option>)}
                </Select>
            </div>
            <div className="themList">     
                <p>请选择题目类型：</p>
                <Select defaultValue="简答题" style={{ width: 120 }} >
                    {questions&&questions.map(item=><Option  value={item.questions_type_text} key={item.questions_type_id}>{item.questions_type_text}</Option>)}
                </Select>
            </div>
            <p>答案信息</p>
            <Editor height='auto' value={editexam.questions_answer}/>
                {/* <Form.Item>
                    
                {getFieldDecorator('valueowen', {
                rules: [{ required: true, message: "答案信息必填" }],
                initialValue: '',
                })(
                <Editor height='auto' value={editexam.questions_answer}/>
                )}
                
                </Form.Item> */}
            <Button type="primary" htmlType="submit" >提交</Button>
        </div> 
    </Form>
        )
}

const mapStateToProps=(state)=>{   
    return {
        ...state.exam 
    }
}
const mapDispatchToProps=(dispatch)=>{
    return {
        //获取所有的试题类型
        getQuestionTypes:()=>{
            dispatch({
                type:"exam/questionsTypes"
            })
        },
        //考试类型
        getExamType:()=>{
            dispatch({
                type:"exam/type"
            })
        },
       //获取所有的课程
        getsubject:()=>{
            dispatch({
                type:"exam/subjecttype"
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Form.create()(AddQuestion))