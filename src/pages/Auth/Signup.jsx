import axios from "axios";
import React, { useState } from "react";
import notEyeImg from "../../assets/images/eye_closed.svg";
import eyeImg from "../../assets/images/eye_open.svg";
import singupImg from "../../assets/images/signup-image.jpg";
import classes from "./styles.module.css";
import {  createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import useAuth from '../Auth/useAuth/useAuth';

const Signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [ confirmpass, setConfirmpass] = useState("");
  const [errors, setErrors] = useState("");
  
  const auth = getAuth();
  const { user} = useAuth();


  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
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
    if (!name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email is required";
    }
    if (!phone.trim()) {
      newErrors.phone = "Phone number is required";
    }
    if (!password.trim()) {
      newErrors.password = "Password is required";
    }

    if (Object.keys(newErrors).length === 0) {
      try {
        // Assuming you have an API endpoint for user registration
        const response = await axios.post(
          "https://your-api-endpoint.com/register",
          {
            name,
            email,
            phone,
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
    <section className={classes.signup}>
      <div className={classes.container}>
        <div className={classes.signup_content}>
          <div className={classes.signup_form}>
            <h2 className={classes.form_title}>Sign up</h2>
            <form
              method="POST"
              className={classes.register_form}
              id="register-form"
              onSubmit={handleSubmit}
            >
              {/* name */}
              <div className={classes.form_control}>
                <div className={classes.input_group}>
                  <label htmlFor="name">
                    <i
                      className={`${classes.zmdi} zmdi zmdi-account material-icons-name`}
                    ></i>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    value={name}
                    onChange={handleNameChange}
                  />
                </div>
                {errors.name && (
                  <p className={classes.error_message}>{errors.name}</p>
                )}
              </div>

              {/* email */}
              <div className={classes.form_control}>
                <div className={classes.input_group}>
                  <label htmlFor="email">
                    <i className={`${classes.zmdi} zmdi zmdi-email`}></i>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={handleEmailChange}
                  />
                </div>
                {errors.email && (
                  <p className={classes.error_message}>{errors.email}</p>
                )}
              </div>

              {/* phone */}
              <div className={classes.form_control}>
                <div className={classes.input_group}>
                  <label htmlFor="phone">
                    <i className={`${classes.zmdi} zmdi zmdi-phone`}></i>
                  </label>
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={handlePhoneChange}
                  />
                </div>
                {errors.phone && (
                  <p className={classes.error_message}>{errors.phone}</p>
                )}
              </div>

              {/* password */}
              <div className={classes.form_control}>
                <div className={classes.input_group}>
                  <label htmlFor="password">
                    <i className={`${classes.zmdi} zmdi zmdi-lock`}></i>
                  </label>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="password"
                    placeholder="Password"
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

              {/* confirm password */}
              <div className={classes.form_control}>
                <div className={classes.input_group}>
                  <label htmlFor="password">
                    <i className={`${classes.zmdi} zmdi zmdi-lock`}></i>
                  </label>
                  <input
                    type={isPasswordVisible ? "text" : "password"}
                    id="confirmpassword"
                    placeholder="Confirm Password"
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

              {/* reg button */}
              <div className={`${classes.form_group} ${classes.form_button}`}>
                <input
                  type="submit"
                  name="signup"
                  id="signup"
                  className={classes.form_submit}
                  value="Register"
                />
              </div>

            </form>
          </div>
          <div className={classes.signup_image}>
            <figure>
              <img src={singupImg} alt="sing up image" />
            </figure>
            <a href="/login" className={classes.signup_image_link}>
              I am already member
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
