import React from 'react'
import { Tabs } from 'antd';
import Studentsregister from './StudentsRegister';
import TeacherRegister from './TeacherRegister';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Teachers',
    children: <TeacherRegister/>,
  },
  {
    key: '2',
    label: 'Students',
    children: <Studentsregister/>,
  },

];
const Register = () => {
    return (
        <>
           <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </>
    )
}

export default Register