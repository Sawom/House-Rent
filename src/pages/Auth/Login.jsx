import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';
import notEyeImg from "../../assets/images/eye_closed.svg";
import eyeImg from "../../assets/images/eye_open.svg";
import singinImg from "../../assets/images/signin-image.jpg";
import classes from "./styles.module.css";
import useAuth from "./useAuth/useAuth";

const Login = () => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState("");

  // google sign in
  const {user, signInWithGoogle } = useAuth();
  const auth = getAuth();
  const navigate = useNavigate();

  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

   // email
  const handleEmail = event => {
      setEmail(event.target.value);
  }

  // password
  const handlePassword = event => {
      setPassword(event.target.value);
  }

  // password visible or not
  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

   // handle login with email
   const handleLogin = (email, password)=>{
        signInWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const user = result.user;
                // console.log(user);
                setErrors('');
                navigate(from, {replace: true})
            })
            .then(()=>{
                Swal.fire({
                        title: 'User Login Successful!',
                        showClass: {
                            popup: 'animate__animated animate__fadeInDown'
                        },
                        hideClass: {
                            popup: 'animate__animated animate__fadeOutUp'
                        }
                    })
        })
            .catch((error) => {
               setErrors(error.message);
        });
  }

  // user login 
  const handleUserLogin = event =>{
        // ei line must form e add kora lage.
        event.preventDefault();  
        handleLogin(email, password);
  }

  // reset password
  const resetPassword = async () => {
        if (email) {
            await sendPasswordResetEmail(auth, email)
            .then(result =>{
                 // sweet alert
                Swal.fire({
                    title: 'Email sent. Check your email.',
                    showClass: {
                        popup: 'animate__animated animate__fadeInDown'
                    },
                    hideClass: {
                        popup: 'animate__animated animate__fadeOutUp'
                    }
                })
            })
           .catch((error) => {
               setErrors(error.message);
            });
        }
        else{
            Swal.fire({
                title: 'Please enter your email address',
                showClass: {
                    popup: 'animate__animated animate__fadeInDown'
                },
                hideClass: {
                    popup: 'animate__animated animate__fadeOutUp'
                }
            })
        }
  }

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
              onSubmit={handleUserLogin}
            >

              {/* email */}
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
                    onChange={handleEmail} required
                  />
                </div>
                {errors.email && (
                  <p className={classes.error_message}>{errors.email}</p>
                )}
              </div>

              {/* password */}
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