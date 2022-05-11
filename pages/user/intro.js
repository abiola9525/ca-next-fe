import { useContext } from "react";
import { Context } from "../../context";
import UserRoute from "../../components/routes/UserRoute";
import {BrowserRouter as Router, Link} from "react-router-dom"




const IntroIndex = () => {
  const {
    state: { user },
  } = useContext(Context);

  return (
    <UserRoute>
    <Router>   
      <h1 className="jumbotron text-center square">
       Cyber Security
      </h1>
      <iframe width="800" height="450" src="https://www.youtube-nocookie.com/embed/inWWhr5tnEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      <br/><br/><br/><br/><br/><br/><h1>Tutorial Highlight</h1>
      <p>➤ In layman’s terms, cybersecurity is the field that helps businesses and organizations defend devices, machines, and services from electronic attacks by nefarious actors such as hackers. While there can be offensive components to cybersecurity, most of today's professionals focus on determining the best way to defend everything from computers and smartphones to networks and databases from attackers.</p>
      <br/>
      <p>➤ While the bits and bytes behind these efforts can be hard to visualize, it's much easier to consider the effects. Without cybersecurity professionals working tirelessly, many websites would be nearly impossible to enjoy due to ever-present denial-of-service attack attempts.</p>     
      <br/>
      <p>➤ In our cybersecurity tutorial, you will learn all the aspects of cybersecurity right from why is it critical to various kinds of cybersecurity certifications and which one is right for you.</p>
      <br/>
      <p>➤ The tutorial also covers technical aspects like security and risk management training, ethical hacking, penetration testing, SQL injection, and will also help you prepare for any cybersecurity-related interview and much more.</p>
      <br/>
      <p>Start learning with our cybersecurity tutorial now and get all geared up to beat the hackers in their own game!</p>
      <br/>
      

      <div>

        <a href="./lesson1" style={{marginLeft: "1100px" }}>Next</a>
      </div>
      <br/><br/><br/><br/>
      </Router>
    </UserRoute>

  );
};

export default IntroIndex;
