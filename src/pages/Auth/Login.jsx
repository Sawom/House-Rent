import axios from "axios";
import React, { useState } from "react";
import notEyeImg from "../../assets/images/eye_closed.svg";
import eyeImg from "../../assets/images/eye_open.svg";
import singinImg from "../../assets/images/signin-image.jpg";
import classes from "./styles.module.css";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Simple validation example (you can replace it with your own validation logic)
    const newErrors = {};
    if (!email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        const response = await axios.post(
          "https://your-api-endpoint.com/login",
          {
            email,
            password,
          }
        );

        // Handle the API response as needed
        console.log("API Response:", response.data);

        // You might want to redirect the user or perform other actions based on the API response
      } catch (error) {
        // Handle errors, such as displaying an error message
        console.error("API Error:", error.message);
      }
    } else {
      // Update the errors state to display validation messages
      setErrors(newErrors);
    }
  };

  return (
    <section className={classes.signin}>
      <div className={classes.container}>
        <div className={classes.signin_content}>
          <div className={classes.signin_image}>
            <figure>
              <img src={singinImg} alt="sing up image" />
            </figure>
            <a href="/signup" className={classes.signup_image_link}>
              Create an account
            </a>
          </div>

          <div className={classes.signin_form}>
            <h2 className={classes.form_title}>Sign In</h2>
            <form
              method="POST"
              className={classes.register_form}
              id="login-form"
              onSubmit={handleSubmit}
            >
              <div className={classes.form_control}>
                <div className={classes.input_group}>
                  <label htmlFor="email">
                    <i className={`${classes.zmdi} zmdi zmdi-email`}></i>
                  </label>
                  <input
                    className={classes.input__style_1}
                    type="email"
                    placeholder="Your Email"
                    name="email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                {errors.email && (
                  <p className={classes.error_message}>{errors.email}</p>
                )}
              </div>

              <div className={classes.form_control}>
                <div className={classes.input_group}>
                  <label htmlFor="password">
                    <i className={`${classes.zmdi} zmdi zmdi-lock`}></i>
                  </label>
                  <input
                    className={classes.input__style_1}
                    type={isPasswordVisible ? "text" : "password"}
                    placeholder="Your Password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={handlePasswordChange}
                  />

                  <button
                    type="button"
                    className={classes.show_passwd}
                    onClick={togglePasswordVisibility}
                  >
                    <img
                      src={isPasswordVisible ? eyeImg : notEyeImg}
                      alt="Show Password"
                    />
                  </button>
                </div>
                {errors.password && (
                  <p className={classes.error_message}>{errors.password}</p>
                )}
              </div>

              <div className={`${classes.form_group} ${classes.form_button}`}>
                <input
                  type="submit"
                  name="signin"
                  id="signin"
                  className={classes.form_submit}
                  value="Log in"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
