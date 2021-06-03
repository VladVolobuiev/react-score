import React, { useState } from 'react';
import { Nav, Navbar, Modal, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import s from './HeaderPage.module.css';

import { Field, Formik } from 'formik';
const HeaderPage = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Form inline className={s.form_wrapper}>
          <Nav className={s.login_wrapper}>
            <Button variant="primary" onClick={handleShow}>
              Login
            </Button>

            <Modal
              show={show}
              onHide={handleClose}
              backdrop="static"
              keyboard={false}
            >
              <Modal.Header>
                <Modal.Title>Login</Modal.Title>
                <Button
                  className="btn-close"
                  aria-label="Close"
                  onClick={handleClose}
                ></Button>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <Formik
                    initialValues={{ email: '', password: '' }}
                    // validate={(values) => {
                    //   const errors = {};
                    //   if (!values.email) {
                    //     errors.email = 'Required';
                    //   } else if (
                    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                    //   ) {
                    //     errors.email = 'Invalid email address';
                    //   }
                    //   return errors;
                    // }}

                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2));
                        setSubmitting(false);
                      }, 400);
                    }}
                  >
                    {({
                      errors,
                      touched,

                      handleSubmit,
                      isSubmitting,
                    }) => (
                      <form className={s.login_modal} onSubmit={handleSubmit}>
                        <label class="form-label" htmlFor="email">
                          Email
                        </label>
                        <br />
                        <Field
                          className="form-control"
                          id="email"
                          name="email"
                          type="email"
                        />
                        <br />

                        {errors.email && touched.email && errors.email}
                        <label class="form-label" htmlFor="password">
                          Password
                        </label>
                        <br />
                        <Field
                          className="form-control"
                          id="password"
                          type="password"
                          name="password"
                        />
                        <br />
                        {errors.password && touched.password && errors.password}
                        <button
                          type="submit"
                          className="btn btn-primary"
                          disabled={isSubmitting}
                        >
                          Submit
                        </button>
                      </form>
                    )}
                  </Formik>
                </div>
              </Modal.Body>
            </Modal>
          </Nav>
        </Form>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto me-auto">
            <Nav.Link>
              <Link className={s.nav_link} to="/">
                Main
              </Link>
            </Nav.Link>

            <Nav.Link>
              <Link className={s.nav_link} to="/Basket">
                Basket
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default HeaderPage;
