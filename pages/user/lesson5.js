import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import {BrowserRouter as Router, Link} from "react-router-dom"
import daisy from "./daisy.png"


const Internet = () => {
  const {
    state: { user },
  } = useContext(Context);

  return (
    <UserRoute>
    <Router>
      <h1 className="jumbotron text-center square">
      What is Penetration Testing?
      </h1>
      <div className="App">
        <h2>Lesson Five:What is Penetration Testing?</h2>
        <iframe width="740" height="422" src="https://www.youtube-nocookie.com/embed/RWSqDF_6n4k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br/><br/><br/>
      <a href="../quiz/lesson5quiz" style={{marginLeft: "550px"}}><b>Take Assessment</b></a>
      <div>
        <a href="./lesson4" style={{}}>Previous</a>
        <a href="./lesson6" style={{marginLeft: "1100px" }}>Next</a>
        <br/><br/><br/><br/><br/><br/>
      </div>
      </Router>
    </UserRoute>
  );
};

export default Internet;
