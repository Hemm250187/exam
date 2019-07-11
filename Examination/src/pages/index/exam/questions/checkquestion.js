import React, { useEffect } from 'react'
import {connect} from "dva";
import "../css/examPage.css"
import { Select,Button,Tag} from 'antd';

const { Option } = Select;

function checkquestion(props) {
    let {exam,examtype,subject,questions}=props;
    useEffect(()=>{
       props.getQuestion(),
       props.getExamType(),
       props.getsubject(),
       props.getQuestionsType()
    },[])
   
    let subjectdelog=()=>{
        let {history}=props;
        history.push({pathname:"/exam/details"})
    }
    return (
        <div className="seequest">
            <h2>查看试题</h2>
            <div className="navquest">
                <div className="course">
                    <div className="coursetype">课程类型：</div>
                    <div className="listcourse">
                        <span>All</span>
                        {subject.map(item=><span key={item.subject_id}>{item.subject_text}</span>)}
                    </div>
                </div>
                <div className="other">
                    <div className="othertype">
                    <span>考试类型</span>：
                        <Select defaultValue="周考一" style={{ width: 120 }} >
                        {examtype&&examtype.map((item)=><Option value={item.exam_name} key={item.exam_id}>{item.exam_name}</Option>)}
                        </Select>
                    </div>
                    <div className="othertype">
                    <span>题目类型：</span>
                        <Select defaultValue="简答题" style={{ width: 120 }} >
                        {questions&&questions.map(item=><Option value={item.questions_type_text} key={item.questions_type_id}>{item.questions_type_text}</Option>)}
                        </Select>
                    </div>
                    <Button type="primary" icon="search">查询</Button>
                </div>
            </div>
            <div className="listquest">
                {exam&&exam.map((item,index)=>
                    <div className="subject" key={index}>
                        <div className="listsubject" onClick={()=>subjectdelog()}>
                            <h4>{item.title}</h4>
                            <div className="labels">
                                <Tag color="gold">{item.questions_type_text}</Tag>
                                <Tag color="lime">{item.subject_text}</Tag>
                                <Tag color="green">{item.exam_name}</Tag>
                            </div>
                            <div className="usesubject">{item.user_name}发布</div>
                        </div>
                        <div className="edit">编辑</div>
                    </div>
                )}
            </div>
        </div>
    ) 
}
const mapStateToProps = (state) => {
    return {
        ...state.exam 
    }
 }
const mapDispatchToProps = dispatch => {
    return {
      //获取所有的试题
       getQuestion: () => {
           dispatch({
               type:"exam/exam",
           })
        },
      //获取所有的考试类型
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
      },
      //获取所有的试题类型
      getQuestionsType:()=>{
          dispatch({
              type:"exam/questionsTypes"
          })
      }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(checkquestion)