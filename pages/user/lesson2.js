import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import {BrowserRouter as Router, Link} from "react-router-dom"
import daisy from "./daisy.png"


const Definition = () => {
  const {
    state: { user },
  } = useContext(Context);

  return (
    <UserRoute>
    <Router>
      <h1 className="jumbotron text-center square">
       Cyber Security For Beginners
      </h1>
      <div className="App">
        <h2>Lesson Two: Cyber Security For Beginners</h2>
        <iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/wMRzjwYMou0?start=7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br/><br/><br/>
      <a href="../quiz/lesson2quiz" style={{marginLeft: "550px"}}><b>Take Assessment</b></a>
      <div>
        <a href="./lesson1">Previous</a>
        <a href="./lesson3" style={{marginLeft: "1100px" }}>Next</a>
        <br/><br/><br/><br/><br/><br/>
      </div>
      </Router>
    </UserRoute>
  );
};

export default Definition;
