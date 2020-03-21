import React from "react";

const Login = () => {
    return (
        <form className='col-6 mt-5'>
            <div className="form-group">
                <label>Login</label>
                <input type="text" className="form-control"
                       name='name' placeholder="Enter login" required/>
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control"
                       placeholder="Password" required/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    );
};

export default Login;
