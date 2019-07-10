import AddQuestion from '../view/question/addQuestion'
import Classfiy from '../view/question/classfiy'
import ExamQuestion from '../view/question/examQuestion'
import AddUser from '../view/user_management/addUser'
import UserList from '../view/user_management/userList'
import AddExam from '../view/exam_manage/addExam'
import ExamList from '../view/exam_manage/examList'
import ClassManage from '../view/class_manage/classManage'
import RoomManage from '../view/class_manage/roomManage'
import StudentsManage from '../view/class_manage/studentsManage'
import AwaitClass from '../view/paper_manage/AwaitClass'
import Home from '../view/home';
import Login from '../pages/login/IndexPage'

let routes=[
    {
        path:"/home",
        component:Home,
        children:[
            {
                path:"/home/addQuestion",
                component: AddQuestion
            },
            {
                path:"/home/classfiy",
                component: Classfiy
            },
            {
                path:"/home/examQuestion",
                component: ExamQuestion
            },
            {
                path:"/home/addUser",
                component: AddUser
            },
            {
                path:"/home/userList",
                component: UserList
            },
            {
                path:"/home/addExam",
                component: AddExam
            },
            {
                path:"/home/examList",
                component: ExamList
            },
            {
                path:"/home/classManage",
                component: ClassManage
            },
            {
                path:"/home/roomManage",
                component: RoomManage
            },
            {
                path:"/home/studentsManage",
                component: StudentsManage
            },
            {
                path:"/home/AwaitClass",
                component: AwaitClass
            }
        ]
    },
    {
        path:"login",
        component:Login
    }
]
export default routes
