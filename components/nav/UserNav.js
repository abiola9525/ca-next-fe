import { useState, useEffect } from "react";
import Link from "next/link";

const UserNav = () => {
  const [current, setCurrent] = useState("");

  useEffect(() => {
    process.browser && setCurrent(window.location.pathname);
  }, [process.browser && window.location.pathname]);

  return (
    <div className="nav flex-column nav-pills">
      <Link href="/user">
        <a className={`nav-link ${current === "/user" && "active"}`}>
          Dashboard
        </a>
      </Link>
      <Link href="/user/intro">
        <a className={`nav-link ${current === "/user/intro" && "active"}`}>
          Intoduction
        </a>
      </Link>
      <Link href="/user/lesson1">
        <a className={`nav-link ${current === "/user/lesson1" && "active"}`}>
          What ia Cyber Security and its importance<br/> Lesson - One
        </a>
      </Link>
      <Link href="/user/lesson2">
        <a className={`nav-link ${current === "/user/lesson2" && "active"}`}>
         Cyber Security For Beginners<br/> Lesson - Two
        </a>
      </Link>
      <Link href="/user/lesson3">
        <a className={`nav-link ${current === "/user/lesson3" && "active"}`}>
         How to Become a Cyber Security Engineer? <br/> Lesson Three
        </a>
      </Link>
      <Link href="/user/lesson4">
        <a className={`nav-link ${current === "/user/lesson4" && "active"}`}>
          What is Ethical Hacking and Type of Ethical Hackers<br/> Lesson Four
        </a>
      </Link>
      
      <Link href="/user/lesson5">
        <a className={`nav-link ${current === "/user/lesson5" && "active"}`}>
          What is Penetration Testing?<br/> Lesson Five
        </a>
      </Link>
      <Link href="/user/lesson6">
        <a className={`nav-link ${current === "/user/lesson6" && "active"}`}>
          What is SQL Injection & How to Prevent SQL Injection<br/> Lesson Six
        </a>
      </Link>
      <Link href="/user/lesson7">
        <a className={`nav-link ${current === "/user/lesson7" && "active"}`}>
          How to Become an Ethical Hacker<br/> Lesson Seven
        </a>
      </Link>
      
    </div>
  );
};

export default UserNav;
