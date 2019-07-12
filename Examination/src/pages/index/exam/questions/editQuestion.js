import React from 'react'
import "../css/examPage.css"
import {Tag} from 'antd';
function detail(props){
    let exam = props.location.params.exam;
    console.log(exam) 
    return (
        <div className="edit_exam">
            <h2>修改试题</h2>
            
        </div>
    )
}
export default detail