import React from 'react';
import LoginComponent from './LoginComponent';

export default class HomeComponent extends React.Component
{
    render() {
        return(
            <>

                <div className="container">
                    <h1 className="text-warning text-center">Shopping Mart</h1>
                    <p className="text-center">50% OFF - Special Offers on Electronics</p>
                    <LoginComponent/>
                </div>
            </>
        )
    }
}