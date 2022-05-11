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
       What is Ethical Hacking and Type of Ethical Hackers
      </h1>
      <div className="App">
        <h2>Lesson Four: What is Ethical Hacking and Type of Ethical Hackers</h2>
        <iframe width="740" height="422" src="https://www.youtube-nocookie.com/embed/gK73JLEbDs0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
      <br/><br/><br/>
      <a href="../quiz/lesson4quiz" style={{marginLeft: "550px"}}><b>Take Assessment</b></a>
      <div>
        <a href="./lesson3" style={{}}>Previous</a>
        <a href="./lesson5" style={{marginLeft: "1100px" }}>Next</a>
        <br/><br/><br/><br/><br/><br/>
      </div>
      </Router>
    </UserRoute>
  );
};

export default Internet;
