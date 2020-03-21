import React from "react";

const Register = () => {
    return (
            <form className='col-6'>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="text" className="form-control"
                           placeholder="Enter email" required/>
                </div>
                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control"
                           placeholder="Password" required/>
                </div>
                <button type="submit" className="btn btn-primary">Register</button>
            </form>
    );
};

export default Register;
