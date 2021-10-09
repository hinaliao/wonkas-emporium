import { useState, useEffect } from "react";
import axios from "axios";
import "./Subscribe.css";

export default function Subscribe({ createSubs }) {
  const [mail, setEmail] = useState({
    email: "",
  });

  const [touched, setTouch] = useState({
    email: false,
  });

  const [errors, setError] = useState({
    email: "",
  });

  const validationInput = {
    email: [
      {
        validation: "/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/i",
        message: "Enter a valid e-mail address",
      },
      // {
      //   validation: mail.email.length > 0,
      //   message: 'Required Field',
      // },
    ],
  };

  const verify = () => {
    const newErrors = {};
    const validationErr = Object.keys(validationInput).filter((key) => {
      const error = validationInput[key].find((prop) => !prop.validation);

      if (error) {
        newErrors[key] = error.message;
        return true;
      }
      newErrors[key] = "";
      return false;
    });
    setError(newErrors);

    return validationErr.length > 0;
  };

  useEffect(() => {
    verify();
  }, [mail, touched]);

  const handleChange = (event) => {
    const { name, mail } = event.target;
    setEmail({ ...mail, [name]: mail });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouch({ ...touched, [name]: true });
  };

  const handleInputEmail = async (e) => {
    e.preventDefault();

    const { email } = mail;
    const user = { email };

    await axios.post("/subscription", user);

    const hasError = verify();
    setTouch({
      email: true,
    });
    if (hasError) {
      return;
    }

    createSubs({ email: mail.email, ...mail });

    setEmail({
      email: "",
    });
  };

  // const feedback = (touched, error) => {
  //   if (touched && error) {
  //     return "error-border";
  //   }

  // if (touched && !error) {
  //   return "okay-border";
  // }
  // };

  return (
    <div className="email-subs">
      <h2>Don't miss out!</h2>
      <p>Subscribe to our newsteller and get updated!</p>
      <form onSubmit={handleInputEmail} className="email-container">
        <div className="signup">
          <input
            // className={feedback(touched.email, errors.email)}
            type="email"
            name="email"
            placeholder="Enter E-mail Address"
            value={mail.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button type="submit">Sign Up</button>
          {/* {touched.email && errors.email && (
            <span className="message error">{errors.email}</span>
          )}
          {/* {touched.email && !errors.email && (
            <span className="message success">Ok</span>
          )} */}
        </div>
      </form>
    </div>
  );
}
