import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProviders";


const Login = () => {

const {signInUser} = useContext(AuthContext)

const handleSubmit = (e) => {
     e.preventDefault();
     const email =  e.target.email.value;
     const password = e.target.password.value
     console.log(email,password)

     signInUser(email,password)
     .then(result => {
      console.log(result.user);
      
     })
     


};


return (
        <div className="card bg-base-100 w-full mx-auto mt-24 max-w-sm shrink-0 shadow-2xl">
           <div >
      <h1 className="text-2xl font-bold text-center">Login</h1>
     
    </div>
        <form onSubmit = {handleSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name = 'email' placeholder="email" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name= 'password' placeholder="password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
          <p className="text-center"><small >Have you any acoount? <Link to ='/register'>Register now</Link></small></p>
        </form>
      </div>
    );
};

export default Login;