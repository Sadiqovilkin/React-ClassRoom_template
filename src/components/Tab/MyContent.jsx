import LoginTab from "../Login/LoginTab";
import Main from "../Main/Main";
import Register from "../Register/Register";



const MyContent = ({ id }) => {
  // console.log("key: ", id);
  return <>{id == 1 ? <Main/> : id == 2 ? <LoginTab /> : <Register />}</>;
};



export default MyContent;