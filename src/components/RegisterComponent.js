import React from 'react';
import axios from 'axios';
import {useFormik} from 'formik';

const RegisterComponent = () => {

    const formik = useFormik({
        initialValues: {
            ProductId: 0,
            Name: '',
            Price: 0,
            Stock: false
        },
        onSubmit: values => {
            axios.post('http://127.0.0.1:3030/addproduct', values);
            alert("Record Inserted");
        }
    })
    return(
        <>
            <div>
                <form onSubmit={formik.handleSubmit} className="container">
                    <h3>Register Product</h3>
                    <dl>
                        <dt>Product Id</dt>
                        <dd>
                            <input type="text" name="ProductId" value={formik.values.ProductId} onChange={formik.handleChange} className="form-control" />
                        </dd>
                        <dt>Product Name</dt>
                        <dd>
                            <input type="text" name="Name" value={formik.values.Name} onChange={formik.handleChange} className="form-control" />
                        </dd>
                        <dt>Product Price</dt>
                        <dd>
                            <input type="text" name="Price" value={formik.values.Price} onChange={formik.handleChange} className="form-control" />
                        </dd>
                        <dt>Product Stock</dt>
                        <dd className="form-check form-switch">
                            <input type="checkbox" name="Stock" checked={formik.values.Stock} onChange={formik.handleChange} className="form-check-input" /> Yes
                        </dd>
                    </dl>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
            </div>
        </>
    )
}

export default RegisterComponent;