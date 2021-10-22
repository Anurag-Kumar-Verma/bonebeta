import React from 'react';
import axios from 'axios';

export default class DataComponent extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            data: []
        }
    }
    componentDidMount(){
        axios.get("http://127.0.0.1:3030/getproducts").then(response => {
            this.setState({
                data:response.data
            })
        })
    }
    render(){
        return(
            <>
            <div className="container-fluid">
                <h3 className="text-center">Products</h3>
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th>Product Id</th>
                            <th>Product Name</th>
                            <th>Product Price</th>
                            <th>Stock</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.data.map(product => 
                                <tr>
                                    <td>{product.ProductId}</td>
                                    <td>{product.Name}</td>
                                    <td>{product.Price}</td>
                                    <td>{(product.Stock===true)?"Available":"Out of Stock"}</td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </>
        )
    }
}