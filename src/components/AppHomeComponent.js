import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';
import RegisterComponent from './RegisterComponent';
import DataComponent from './DataBindingComponent';
import LoginComponent from './LoginComponent';

const HomeComponent = () => (
    <>
    <h2 className="text-center">Application - Home</h2>
    </>
)

function NotFound() {
    return (
        <h3 className="text-center">Page You Requested - Not Found</h3>
    )
}

export default class AppHomeComponent extends React.Component 
{
    render(){

        return(
            <Router>
                <header className="bg-danger text-white mt-1">
                    <h1 className="text-center py-3">React Application</h1>
                </header>
                <div className="row mt-3">
                    <div className="col-3 mt-3">
                        <ul className="list-unstyled">
                            <li className="d-grid mt-2">
                                <Link className="btn btn-danger" to="/home">Home</Link>
                            </li>
                            <li className="d-grid mt-2">
                                <Link className="btn btn-danger" to="/register">Register</Link>
                            </li>
                            <li className="d-grid mt-2">
                                <Link className="btn btn-danger" to="/login">Login</Link>
                            </li>
                            <li className="d-grid mt-2">
                                <Link className="btn btn-danger" to="/data">Get Data</Link>
                            </li>
                            <li className="d-grid mt-2">
                                <Link className="btn btn-danger" to="*">Help</Link>
                            </li>
                        </ul>
                    </div>
    
                    <div className="col-9 mt-3">
                        <Switch>
                            <Route exact path="/">
                                <HomeComponent/>
                            </Route>
                            <Route exact path="/home">
                                <Redirect to="/"/>
                            </Route>
                            <Route exact path="/register">
                                <RegisterComponent/>
                            </Route>
                            <Route exact path="/data">
                                <DataComponent />
                            </Route>
                            <Route exact path="/login">
                                <LoginComponent />
                            </Route>
                            <Route exact path="*">
                                <NotFound />
                            </Route>
                        </Switch>
                    </div>
                </div>
            </Router>
        )
    }
}