import React from "react";
import * as Yup from "yup";
import uuid from "react-uuid";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "../static/css/register.css";

const Register = () => {
  const navigate = useNavigate();
  const validate = Yup.object({
    firstName: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("First Name is required"),
    lastName: Yup.string()
      .max(15, "Must be 20 characters or less")
      .required("Last Name is required"),
    email: Yup.string().email("Email is invalid").required("Email is required"),
    password: Yup.string()
      .min(6, "Must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Confirm Password is not match")
      .required("Confirm Password is required"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validate),
    mode: "onBlur",
  });

  const submit = (values) => {
    values.id = uuid();
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    let listUsers = [];
    userInfo
      ? (listUsers = [...userInfo, values])
      : (listUsers = [...listUsers, values]);
    localStorage.setItem("userInfo", JSON.stringify(listUsers));
    navigate("/login");
  };

  return (
    <form onSubmit={handleSubmit(submit)}>
      <div className="signup-form">
        <h2 className="my-4 font-weight-bold-display-4 d-flex justify-content-center">
          Sign Up
        </h2>
        <div className="mb-2">
          <label htmlFor="firstName">First Name</label>
          <input
            {...register("firstName")}
            className={`w-100 form-control shadow-none ${
              errors.firstName && "is-invalid"
            }`}
            autoComplete="off"
            type="text"
          />
          {errors.firstName ? (
            <div className="error">{errors.firstName?.message}</div>
          ) : null}
        </div>

        <div className="mb-2">
          <label htmlFor="lastName">Last Name</label>
          <input
            {...register("lastName")}
            className={`w-100 form-control shadow-none ${
              errors.lastName && "is-invalid"
            }`}
            autoComplete="off"
            type="text"
          />
          <div className="error">{errors.lastName?.message}</div>
        </div>

        <div className="mb-2">
          <label htmlFor="email">Email</label>
          <input
            {...register("email")}
            className={`w-100 form-control shadow-none ${
              errors.email && "is-invalid"
            }`}
            autoComplete="off"
            type="email"
          />
          <div className="error">{errors.email?.message}</div>
        </div>

        <div className="mb-2">
          <label htmlFor="password">Password</label>
          <input
            {...register("password")}
            className={`w-100 form-control shadow-none ${
              errors.password && "is-invalid"
            }`}
            autoComplete="off"
            type="password"
          />
          <div className="error">{errors.password?.message}</div>
        </div>

        <div className="mb-2">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input
            {...register("confirmPassword")}
            className={`w-100 form-control shadow-none ${
              errors.confirmPassword && "is-invalid"
            }`}
            autoComplete="off"
            label="Confirm Password"
            name="confirmPassword"
            type="password"
          />
          <div className="error">{errors.confirmPassword?.message}</div>
        </div>

        <button className="btn btn-dark mt-3" type="submit">
          Register
        </button>
        <button
          className="btn btn-danger mt-3 ms-3"
          type="button"
          onClick={() => reset()}
        >
          Reset
        </button>
      </div>
    </form>
  );
};

export default Register;
