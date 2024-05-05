import React from 'react'
import { Tabs } from 'antd';
import TeachersSignIn from './TeachersLogin';
import StudentsSignIn from './StudentsLogin';
const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: 'Teachers',
    children: <TeachersSignIn/>,
  },
  {
    key: '2',
    label: 'Students',
    children: <StudentsSignIn/>,
  },

];
const LoginTab = () => {
    return (
        <>
           <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
        </>
    )
}

export default LoginTab