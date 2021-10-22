const LoginComponent = () => {
    const title = 'User Login';

    return (
        <>
        <h2 className="text-primary">{title}</h2>
        <dl>
            <dt>User Name</dt>
            <dd><input type="text"/></dd>
            <dt>Password</dt>
            <dd><input type="password" /></dd>
        </dl>
        <button className="btn btn-primary">Login</button>
        </>
    )
}

export default LoginComponent;
