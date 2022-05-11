import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import {BrowserRouter as Router, Link} from "react-router-dom"
import daisy from "./daisy.png"



const LessonOneIndex = () => {
  const {
    state: { user },
  } = useContext(Context);

  return (
    <UserRoute>
    <Router>
      <h1 className="jumbotron text-center square">
        What ia Cyber Security and its importance
      </h1>
      <div className="App">
        <h2>Lesson One: What ia Cyber Security and its importance</h2>
        <iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/z5nc9MDbvkw?start=20" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br/><br/><br/>
      <a href="../quiz/lesson1quiz" style={{marginLeft: "550px", fontSize: "20px"}}><b>Take Assessment</b></a>

      

      <div>
      <br/><br/>
        <a href="./intro" style={{}}>Previous</a>
        <a href="./lesson2" style={{marginLeft: "1100px" }}>Next</a>
        <br/><br/><br/><br/><br/><br/>
      </div>
      </Router>
    </UserRoute>
  );
};

export default LessonOneIndex;
