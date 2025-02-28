import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import {AuthContext} from './AuthProviders'

const Register = () => {

const {createUser , signInWithGoogle} = useContext(AuthContext)
const navigate = useNavigate();

const handleSignInGoogle = () => {
  signInWithGoogle()
  .then(result => {
    console.log(result.user)
    navigate('/')
  })
  
  .catch(error => console.log('ERROR',error.message))

}


    const handleSubmit = (e) => {
        e.preventDefault()
        const name =  e.target.name.value;
       const email =  e.target.email.value;
       const password = e.target.password.value
       const photo = e.target.photo.value
         console.log(name,email,password,photo)

        //  CreateUser
    createUser (email , password)
    .then(result => {
        console.log(result.user)
        e.target.reset()
        navigate('/')
    })
    .catch(error => {
        console.log('ERROR',error.message);
        
    })

    }

    return (
       <div className="hero bg-base-200 min-h-screen">
     
  <div>
  <div >
      <h1 className="text-2xl font-bold text-center">Register</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
    <form onSubmit = {handleSubmit} className="card-body">
    <div className="form-control">
            <label className="label">
              <span className="label-text">Name</span>
            </label>
            <input type="name" name = 'name' placeholder="Name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name = 'email' placeholder="email" className="input input-bordered" required />
          </div>
          {/* photo URL  */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name = 'photo' placeholder="Photo URL" className="input input-bordered" required />
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
            <button className="btn btn-primary">Register</button>
          </div>
          <p className="text-center"><small >Already have an acoount ? 
            <Link to ='/login'>Login</Link></small></p>
            <p className="text-center">
              <button onClick={handleSignInGoogle} className="btn btn-ghost">Google</button>
            </p>
        </form>
    </div>
  </div>
</div>
    );
};

export default Register;