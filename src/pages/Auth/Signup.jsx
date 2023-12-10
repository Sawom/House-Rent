import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import notEyeImg from "../../assets/images/eye_closed.svg";
import eyeImg from "../../assets/images/eye_open.svg";
import singupImg from "../../assets/images/signup-image.jpg";
import useAuth from '../Auth/useAuth/useAuth';
import classes from "./styles.module.css";

const Signup = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [ confirmpass, setConfirmpass] = useState("");
  const [errors, setErrors] = useState("");
  const [type, setType] = useState("");

  const auth = getAuth();
  const { user} = useAuth();

  const navigate = useNavigate();
    // navigate
  if(user?.email){
      navigate('/');
  }

  // name
  const handleName = event =>{
      setName(event.target.value);
  }

  // email
  const handleEmail = event =>{
      setEmail(event.target.value);
  }

  // password
  const handlePassword = event =>{
      setPassword(event.target.value);
  }

  // confirm password
  const handleConfirmpass = event =>{
      setConfirmpass(event.target.value);
  }

  // account type
  const handleType = (event) => {
    setType(event.target.value);
  };

  // password visible or not
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };
  
  // handle phone
  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  // verify email
  const verifyEmail = () =>{
        sendEmailVerification(auth.currentUser)
        .then(()=>{
            
        })
        .catch((error) => {
            setErrors(error.message);
        });
  }

  // register new user
  const registerNewUser = (email,password) =>{
        createUserWithEmailAndPassword(auth, email , password)
        .then(result => {
            const user = result.user;
            console.log(user);
            setErrors('');
            verifyEmail();
            setUserName();
        })
        .catch(error => {
        setErrors(error.message);
      })
  }

  // set user name
  const setUserName = () => {
        const auth = getAuth();
        updateProfile(auth.currentUser, { displayName: name })
        .then(result => {  
            
        })
        .catch((error) => {
            setErrors(error.message);
        });
  }

  // create a new user
  const  handleRegistration = async (event) => {
    event.preventDefault();
     if(password !== confirmpass){
            setErrors("Your password did not match! ");
            return;
        }
        if(password.length < 6){
            setErrors('Password Must be at least 6 characters long.');
            return;
        }
        if (!/(?=.*[A-Z].*[A-Z])/.test(password)) {
            setErrors('Password Must contain 2 upper case');
            return;
        }
        registerNewUser(email, password);
  };

  return (
    <section className={classes.signup}>
      <div className={classes.container}>
        <div className={classes.signup_content}>
          <div className={classes.signup_form}>
            <h2 className={classes.form_title}>Sign up</h2>
            <small>*Password Must be at least 6 characters long and should have 2 uppercase</small>
            <br /> <br />
            <form
              method="POST"
              className={classes.register_form}
              id="register-form"
              onSubmit={handleRegistration}
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
                    onChange={handleName} required
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
                    onChange={handleEmail} required
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
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Your phone number"
                    value={phone}
                    onChange={handlePhone} required
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
                    onChange={handlePassword} required
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
                    value={confirmpass}
                    onChange={handleConfirmpass} required
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

              {/* account type */}
              <Select fullWidth
                value={type}
                onChange={handleType}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }} required
              >
                <MenuItem value="">
                  <p>Account Type</p>
                </MenuItem>
                <MenuItem value={'Landlord'} >Landlord</MenuItem>
                <MenuItem value={'Tenant'}>Tenant</MenuItem>
              </Select>

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
              <br />
              {/* show error */}
              <p style={{color: 'red'}} > {errors} </p>

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
