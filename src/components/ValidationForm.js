import React from 'react';
import {Formik, Form, ErrorMessage, Field} from 'formik';
import * as yup from 'yup';

const ValidationComponent = () => {
    return (
        <Formik initialValues={{
            Name:'', Salary:'', Email:''
        }} onSubmit={
            value=> {alert(JSON.stringify(value))}
        } validationSchema={
            yup.object({
                Name: yup.string()
                .required("User Name Required")
                .min(4, "Name is too short")
                .max(10, "Name too long.."),

                Salary: yup.number()
                .required("Salary Required"),

                Email: yup.string()
                .required("Please Provide Email")
                .email("Invalid Email")
            })
        }>

            {
                props => (
                    <div className="container mt-2">
                        <h2 className="">Register User</h2>
                        <Form>
                            <dl>
                                <dt>Name</dt>
                                <dd>
                                    <Field type="text" name="Name"></Field>
                                </dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="Name"></ErrorMessage>
                                </dd>
                                <dt>Salary</dt>
                                <dd>
                                    <Field type="text" name="Salary"></Field>
                                </dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="Salary"></ErrorMessage>
                                </dd>
                                <dt>Mail</dt>
                                <dd>
                                    <Field type="text" name="Mail"></Field>
                                </dd>
                                <dd className="text-danger">
                                    <ErrorMessage name="Mail"></ErrorMessage>
                                </dd>
                            </dl>

                            <button disabled={props.isValid===false}>Register</button>
                        </Form>
                    </div>
                )
            }

        </Formik>
    )
}

export default ValidationComponent;