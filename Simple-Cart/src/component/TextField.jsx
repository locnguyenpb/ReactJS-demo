import React from 'react';
import { ErrorMessage, useField } from 'formik';

import '../static/css/register.css';

const TextField = ({label, ...props}) => {
  const [field, meta] = useField(props);
  // console.log(field, meta);
  return (
    <div className='mb-2'>
      <div className='d-flex justify-content-between'>
        <label htmlFor={field.name}>{label}</label>
        {props.hasforgotpassword ? (
        <label className='forgot-password'>Forgot password?</label>
        ) : null}
      </div>
      <input
        className={`w-100 form-control shadow-none ${meta.touched && meta.error && 'is-invalid'}`}
        {...field} {...props}
        autoComplete="off"
      />
      {meta.touched && meta.error ? (
        <ErrorMessage component="div" className='error' name={field.name}/>
      ) : null}
    </div>
  );
}
 
export default TextField;