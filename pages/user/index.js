import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import {BrowserRouter as Router, Link} from "react-router-dom"




const UserIndex = () => {
  const {
    state: { user },
  } = useContext(Context);

  return (
    <UserRoute>
    <Router>   
      <h1 className="jumbotron text-center square">
       User Dashboard
      </h1>
      <h1>Courses We Offer</h1>
      <h3 style={{color:"blue"}}>Cyber Security For Everyone</h3>
      <p style={{fontSize: "15px", fontFamily: "TmiesNewRoman"}}> Cyber Security. An introduction to modern information and system protection technology and methods.</p>
      <p>Click <a href="./user/intro" style={{color: "blue"}}>here</a> to get started</p>
      
      </Router>
    </UserRoute>

  );
};

export default UserIndex;
