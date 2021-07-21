import React from 'react';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';

import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MailIcon from '@material-ui/icons/Mail';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import background from '../Image/drew-beamer-kUHfMW8awpE-unsplash.jpg';
import background1 from '../Image/leone-venter-VieM9BdZKFo-unsplash.jpg';
import image from '../Image/images1.png';

import './Createuser.scss';

const Createuser = () => {
  const initialvalues = {
    name: '',
    email: '',
    balance: '',
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Required'),

    email: Yup.string().required('Required').email('Invalid Email'),
    balance: Yup.string()
      .required('Required')
      .matches(/^[0-9]+$/, 'Enter Number'),
  });

  return (
    <div className="login">
      <div
        className="container-fluid"
        style={{
          backgroundBlendMode: 'darken',
          backgroundImage: `url(${background1})`,
          backgroundSize: 'cover',
          height: '750px',
        }}
      >
        <div
          className="row"
          style={{
            width: '50%',
            height: '420px',

            borderRadius: '10px',
            top: '50%',
            left: '50%',
            position: 'absolute',
            transform: 'translate(-50%, -50%)',
            boxSizing: 'border-box',
          }}
        >
          <div
            className="col-4 "
            style={{
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
              backgroundColor: 'grey',

              borderRadius: '10px  0px 0px 10px',
              backgroundImage: `url(${background})`,
            }}
          >
            <img
              src={image}
              alt="avt"
              style={{
                height: '100px',
                width: '100px',
                borderRadius: '50%',
              }}
            />
          </div>
          <div
            className="col-8"
            style={{
              justifyContent: 'center',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                justifyContent: 'center',

                alignItems: 'center',
              }}
            >
              <h3>Create User</h3>
              <Formik
                initialValues={initialvalues}
                validationSchema={validationSchema}
                onSubmit={(values, { resetForm }) => {
                  // same shape as initial values
                  axios({
                    method: 'post',
                    url: 'http://localhost:3001/api/customer',
                    data: values,
                  }).then(function (response) {
                    console.log(response);
                  });
                  resetForm(values);
                  console.log(values);
                }}
              >
                {({ touched, errors, values, handleChange, handleReset }) => (
                  <Form>
                    <div>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <AccountCircle />
                        </Grid>
                        <Grid item>
                          <TextField
                            id="name"
                            label="Name"
                            name="name"
                            value={values.name}
                            onChange={handleChange}
                            error={touched.name && Boolean(errors.name)}
                            helperText={errors.name}
                          />
                        </Grid>
                      </Grid>
                    </div>
                    <div>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <MailIcon />
                        </Grid>
                        <Grid item>
                          <TextField
                            id="email"
                            label="E-mail"
                            name="email"
                            value={values.email}
                            onChange={handleChange}
                            required
                            helperText={errors.email}
                            error={touched.email && Boolean(errors.email)}
                          />
                        </Grid>
                      </Grid>
                    </div>
                    <div>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <MonetizationOnIcon />
                        </Grid>
                        <Grid item>
                          <TextField
                            id="balance"
                            label="Balance"
                            name="balance"
                            value={values.balance}
                            onChange={handleChange}
                            required
                            helperText={errors.balance}
                            error={touched.balance && Boolean(errors.balance)}
                          />
                        </Grid>
                      </Grid>
                    </div>
                    <div>
                      <Grid container spacing={2} alignItems="flex-end">
                        <Grid item className="mt-3">
                          <button className="btn btn-success " type="submit">
                            Create
                          </button>
                        </Grid>
                        <Grid item className="mt-3">
                          <button
                            className="btn btn-success "
                            type="submit"
                            onClick={handleReset}
                          >
                            Reset
                          </button>
                        </Grid>
                      </Grid>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Createuser;
