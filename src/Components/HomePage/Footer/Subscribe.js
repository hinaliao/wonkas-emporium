import { useState, useEffect } from "react";
import axios from "axios";
import "./Subscribe.css";

export default function Subscribe() {
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
        validation: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/ig.test(mail.email),
        message: "Enter a valid e-mail address",
      },
    ],
  };

  const verify = () => {
    const newErrors = {};
    const validationErr = Object.keys(validationInput).filter((key) => {
      const error = validationInput[key].find((prop) => !prop.validation);
      // console.log(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+.[A-Z]{2,4}$/ig.test(mail.email));
      // console.log(mail.email);
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
    const { name, value } = event.target;
    setEmail({ ...mail, [name]: value });
  };

  const handleBlur = (event) => {
    const { name } = event.target;
    setTouch({ ...touched, [name]: true });
  };

  const handleInputEmail = async (e) => {
    e.preventDefault();

    const { email } = mail;
    const user = { email };

    const hasError = verify();
    setTouch({
      email: true,
    });
    // console.log(hasError);
    if (hasError) {
      return;
    }
    
    await axios.post("https://ironrest.herokuapp.com/wonkalicious-subscriptions", user);

    setEmail({
      email: "",
    });
    setError({
      email: "",
    });
    setTouch({
      email: false,
    });
  };

  const feedback = (touched, error) => {
    if (touched && error) {
      return "error-border";
    }

  if (touched && !error) {
    return "okay-border";
  }
  };

  return (
    <div className="email-subs">
      <h2>Don't miss out!</h2>
      <p>Subscribe to our newsteller and get updated!</p>
      <form onSubmit={handleInputEmail} className="email-container">
        <div className="signup">
          <input
            className={feedback(touched.email, errors.email)}
            type="text"
            name="email"
            placeholder="Enter E-mail Address"
            value={mail.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
          <button type="submit">Sign Up</button>
          {touched.email && errors.email && (
            <span className="message error">{errors.email}</span>
          )}
          {touched.email && !errors.email && (
            <span className="message success">Ok</span>
          )} 
        </div>
      </form>
    </div>
  );
}
