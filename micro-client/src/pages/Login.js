import { useFormik } from "formik";
import React, { lazy } from "react";
import { Link, useNavigate } from "react-router-dom";
// const style = lazy(() => import("FIRST_APP/styles/login"));
import style from "./styles.module.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { useDispatch } from "react-redux";
// import { authActions } from "../store/auth-slice";
// const { login } = lazy(() => import("FIRST_APP/utils/login"));
import { login } from "../utils/login"
const Card = lazy(() => import("FIRST_APP/components/card"));
const TopBar = lazy(() => import("FIRST_APP/components/header"));

const Login = () => {
  const navigate = useNavigate();
  // const dispatch = useDispatch();
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: async (values, { resetForm }) => {
      const { data } = await login({
        email: values.email,
        password: values.password,
      });
      if (data.success) {
        // dispatch(authActions.login(data.data.token));
        resetForm();
        toast.success(data.message);
        navigate("/");
      } else {
        toast.error(data.message);
      }
    },
  });

  return (
    <>
      <TopBar backgroundColor="black" color="white" fontSize={20}>
        <h1
          style={{
            textAlign: "initial",
            width: "100vw",
            margin: 0,
            marginLeft: "50px",
          }}
        >
          Micro App
        </h1>
      </TopBar>
      <form onSubmit={formik.handleSubmit} className={style.form}>
        <Card>
          <div className={style.email}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                border: "0px",
                boxShadow:
                  "0 2px 7px 0 rgba(0, 0, 0, 0.1), 0 2px 7px 0 rgba(0, 0, 0, 0.1)",
              }}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className={style.errors}>{formik.errors.email}</div>
            ) : null}
          </div>
          <div className={style.password}>
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              style={{
                border: "0px",
                boxShadow:
                  "0 2px 7px 0 rgba(0, 0, 0, 0.1), 0 2px 7px 0 rgba(0, 0, 0, 0.1)",
              }}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className={style.errors}>{formik.errors.password}</div>
            ) : null}
          </div>
          <button
            type="submit"
            style={{ cursor: "pointer" }}
            disabled={!formik.errors}
          >
            Log in
          </button>
          <div className={style.navigateSignup}>
            <span className={style.navigateSignup}>Don't have an Account?</span>
            <Link to="/signup" className={style.navigateSignupButton}>
              Sign Up
            </Link>
          </div>
        </Card>
      </form>
      <ToastContainer />
    </>
  );
};

export default Login;
