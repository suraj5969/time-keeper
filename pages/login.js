import React from "react";
import {
  Card,
  CardBody,
  Col,
  Container,
  Input,
  Label,
  Row,
  Button,
  Form,
  FormFeedback,
  Alert,
} from "reactstrap";
import Image from "next/future/image";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import ParticlesAuth from "../src/utils/ParticlesAuth";
import logo from "../public/images/logo-light.png";
// Formik validation
// import * as Yup from "yup";
// import { useFormik } from "formik";

const Login = (props) => {
  const router = useRouter();

  // const validation = useFormik({
  //     // enableReinitialize : use this flag when initial values needs to be changed
  //     enableReinitialize: true,

  //     initialValues: {
  //         email: userLogin.email || "admin@themesbrand.com" || '',
  //         password: userLogin.password || "123456" || '',
  //     },
  //     validationSchema: Yup.object({
  //         email: Yup.string().required("Please Enter Your Email"),
  //         password: Yup.string().required("Please Enter Your Password"),
  //     }),
  //     onSubmit: (values) => {
  //         dispatch(loginUser(values, props.history));
  //     }
  // });

  const error = false; // "Some Error Occured";

  return (
    <>
      <Head>
        <title>{`Login - ${process.env.NEXT_PUBLIC_APP_NAME}`}</title>
      </Head>
      <ParticlesAuth>
        <div className="auth-page-content">
          <Container>
            <Row>
              <Col lg={12}>
                <div className="text-center mt-sm-5 mb-4 text-white-50">
                  <div>
                    <Link href="/">
                      <a className="d-inline-block auth-logo">
                        {/* <img src={logoLight} alt="" height="20" /> */}
                        <Image
                          src={logo}
                          height={20}
                          width={0}
                          placeholder="blur"
                          className="w-auto"
                          // objectFit="contain"
                          // layout='responsive'
                          alt="logo"
                        />
                      </a>
                    </Link>
                  </div>
                  <p className="mt-3 fs-15 fw-medium">
                    {process.env.NEXT_PUBLIC_APP_NAME} Login
                  </p>
                </div>
              </Col>
            </Row>

            <Row className="justify-content-center">
              <Col md={8} lg={6} xl={5}>
                <Card className="mt-4">
                  <CardBody className="p-4">
                    <div className="text-center mt-2">
                      <h5 className="text-primary">Welcome Back !</h5>
                      <p className="text-muted">
                        Sign in to continue to {process.env.NEXT_PUBLIC_APP_NAME}.
                      </p>
                    </div>
                    {error ? <Alert color="danger"> {error} </Alert> : null}
                    <div className="p-2 mt-4">
                      <Form
                        onSubmit={(e) => {
                          e.preventDefault();
                          // validation.handleSubmit();
                          router.push("/dashboard");
                          return false;
                        }}
                        action="#"
                      >
                        <div className="mb-3">
                          <Label htmlFor="email" className="form-label">
                            Email
                          </Label>
                          <Input
                            name="email"
                            className="form-control"
                            placeholder="Enter email"
                            type="email"
                            // onChange={validation.handleChange}
                            // onBlur={validation.handleBlur}
                            // value={validation.values.email || ""}
                            // invalid={
                            //     validation.touched.email && validation.errors.email ? true : false
                            // }
                          />
                          {/* {validation.touched.email && validation.errors.email ? (
                                                        <FormFeedback type="invalid">{validation.errors.email}</FormFeedback>
                                                    ) : null} */}
                        </div>

                        <div className="mb-3">
                          <div className="float-end">
                            <Link href="/forgot-password">
                              <a className="text-muted">Forgot password? </a>
                            </Link>
                            {/* <Link to="/forgot-password" className=""></Link> */}
                          </div>
                          <Label
                            className="form-label"
                            htmlFor="password-input"
                          >
                            Password
                          </Label>
                          <div className="position-relative auth-pass-inputgroup mb-3">
                            <Input
                              name="password"
                              // value={validation.values.password || ""}
                              type="password"
                              className="form-control pe-5"
                              placeholder="Enter Password"
                              // onChange={validation.handleChange}
                              // onBlur={validation.handleBlur}
                              // invalid={
                              //     validation.touched.password && validation.errors.password ? true : false
                              // }
                            />
                            {/* {validation.touched.password && validation.errors.password ? (
                                                            <FormFeedback type="invalid">{validation.errors.password}</FormFeedback>
                                                        ) : null} */}
                            <button
                              className="btn btn-link position-absolute end-0 top-0 text-decoration-none text-muted"
                              type="button"
                              id="password-addon"
                            >
                              <i className="ri-eye-fill align-middle"></i>
                            </button>
                          </div>
                        </div>

                        <div className="form-check">
                          <Input
                            className="form-check-input"
                            type="checkbox"
                            value=""
                            id="auth-remember-check"
                          />
                          <Label
                            className="form-check-label"
                            htmlFor="auth-remember-check"
                          >
                            Remember me
                          </Label>
                        </div>

                        <div className="mt-4">
                          <Button
                            color="success"
                            className="btn btn-success w-100"
                            type="submit"
                          >
                            Sign In
                          </Button>
                        </div>

                        <div className="mt-4 text-center">
                          <div className="signin-other-title">
                            <h5 className="fs-13 mb-4 title">Sign In with</h5>
                          </div>
                          <div>
                            <Button color="primary" className="btn-icon me-1">
                              <i className="ri-facebook-fill fs-16" />
                            </Button>
                            <Button
                              color="danger"
                              to="#"
                              className="btn-icon me-1"
                            >
                              <i className="ri-google-fill fs-16" />
                            </Button>
                            <Button color="dark" className="btn-icon">
                              <i className="ri-github-fill fs-16"></i>
                            </Button>{" "}
                            <Button color="info" className="btn-icon">
                              <i className="ri-twitter-fill fs-16"></i>
                            </Button>
                          </div>
                        </div>
                      </Form>
                    </div>
                  </CardBody>
                </Card>

                <div className="mt-4 text-center">
                  <p className="mb-0">
                    Don&apos;t have an account ?
                    <Link href="/signup">
                      <a className="fw-semibold text-primary text-decoration-underline">
                        {" "}
                        Signup
                      </a>
                    </Link>
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </ParticlesAuth>
    </>
  );
};

export default Login;

// Login.noLayout = true;