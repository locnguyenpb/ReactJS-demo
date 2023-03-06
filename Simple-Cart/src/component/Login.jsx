import React from 'react'
import { Formik, Form } from 'formik';
import TextField from './TextField';
import { Link, useNavigate } from "react-router-dom";

import '../static/css/register.css';
import { useState } from 'react';
import { useDispatch } from "react-redux";
import { login } from "../redux/action";

const Login = () => {

  const [isWrongInfo, setIsWrongInfo] = useState(false);

  const dispatch = useDispatch();
  const addLoginState = (userInfo) => {
    dispatch(login(userInfo));
  };
  const navigate = useNavigate();

  const submit = (values) => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    const userEmailList = userInfo.map(user => user.email);
    const userPasswordList = userInfo.map(user => user.password);

    if (userEmailList.includes(values.email) && userPasswordList.includes(values.password)) {
      values.id = userInfo.find(user => user.email === values.email).id;
      setIsWrongInfo(false);
      addLoginState(values);
      navigate('/');
    } else {
      setIsWrongInfo(true);
    }
  };

  return (
    <Formik
      initialValues={{
        email: '',
        password: ''
      }}
      onSubmit={values => {
        submit(values);
      }}
      >
      {formik => (
        <div className='signin-form'>
          <h2 className="my-4 font-weight-bold-display-4 d-flex justify-content-center">Sign In</h2>
          {/* {console.log(formik)} */}
          <Form>
            <TextField label="Email" name="email" type="email" />
            <TextField label="Password" name="password" type="password" hasforgotpassword="true" />
            {isWrongInfo ? (
            <div className='error'>Your email or password is wrong!</div>
            ) : null}
            <button className="btn btn-dark w-100 mt-3" type='submit'>Sign in</button>
          </Form>
          <div className='without-account'>Don't have an account? <Link to="/register" className='sign-up'>Sign up</Link></div>
        </div>
      )}
    </Formik>
  );
};

export default Login;
