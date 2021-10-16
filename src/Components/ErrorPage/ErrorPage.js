import React, { useEffect, useState } from "react";
import abtUs from "../../images/us.png";

const ErrorPage = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const setFromEvent = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      const x = (e.clientX * 100) / window.innerWidth + "%";
      const y = (e.clientY * 100) / window.innerHeight + "%";

      eyeball.style.left = x;
      eyeball.style.top = y;
      eyeball.style.transform = "translate(- " + x + ", -" + y + ")";
      console.log(eyeball.style.left);
    };
    window.addEventListener("mousemove", setFromEvent);

    return () => {
      window.removeEventListener("mousemove", setFromEvent);
    };
  }, []);
//   return position;
  const eyeball = document.querySelector(".pupil");

  //   document.onmousemove = (e) => {
  //     const x = (e.clientX * 100) / window.innerWidth + "%";
  //     const y = (e.clientY * 100) / window.innerHeight + "%";

  //     eyeball.style.left = x;
  //     eyeball.style.top = y;
  //     eyeball.style.transform = "translate(- " + x + ", -" + y + ")";
  //     console.log(eyeball.style.left);
  //   };
  
  return (
    <div>
      <div className="eye-container">
        <p>4</p>
        <div className="eye">
          <div className="upper-eyelid"></div>
          <div className="pupil"></div>
          <div className="lower-eyelid"></div>
        </div>
        <p>4</p>
      </div>
      <div className="btn-container">
        <h2>Nil Desperandum</h2>
        <img src={abtUs} alt="é nois" />
        <p>Oompa Loompas are on the way to fix this 404.</p>
      </div>
    </div>
  );
};

export default ErrorPage;
