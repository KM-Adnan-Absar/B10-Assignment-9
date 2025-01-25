import { Link, NavLink } from 'react-router-dom';
import img from '../assets/images/logo.png';
import { useContext } from 'react';
import { AuthContext } from './AuthProviders';

const Header = () => {

  const {user , signOutUser} = useContext(AuthContext)

  const handleDropdownToggle = () => {
    const dropdownMenu = document.getElementById('dropdown-menu');
    dropdownMenu.classList.toggle('hidden');
  };
const handleSignOut = () => {
  signOutUser()
  .then(() => {
    console.log('User SignOut Successfully');
    
  })
  
.catch(error => 
    console.log('ERROR',error.message))
}
  const links = (
    <>
      <li>
        <NavLink to="/" className="hover:bg-gray-500 font-bold px-4 py-2 block">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/donation" className="hover:bg-gray-500 font-bold px-4 py-2 block">
          Donation Campaigns
        </NavLink>
      </li>
      <li>
        <NavLink to="/help" className="hover:bg-gray-500 font-bold px-4 py-2 block">
          How to Help
        </NavLink>
      </li>
      <li>
        <NavLink to="/dashboard" className="hover:bg-gray-500 font-bold px-4 py-2 block">
          Dashboard
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-teal-500 text-white">
      <div className="w-9/12 mx-auto">
        {/* Dropdown for small devices */}
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost lg:hidden"
            onClick={handleDropdownToggle}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          {/* Dropdown menu */}
          <ul
            id="dropdown-menu"
            className="hidden menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow flex flex-col"
          >
            {links}
          </ul>
        </div>

        {/* Logo and Title */}
        <div className="flex gap-2 items-center">
          <div>
            {/* Circular image with consistent width and height for all screen sizes */}
            <img
              className="bg-white rounded-full w-8 h-8 sm:w-8 sm:h-8 md:w-8 md:h-8 lg:w-8 lg:h-8"
              src={img}
              alt="Logo"
            />
          </div>
          <div className="font-bold text-xl text-black">
            Winter Clothing Donation
          </div>
        </div>
      </div>

      {/* Navbar links for larger devices */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      {/* Login button */}
      <div className="navbar-end btn w-20  p-2 rounded-md">
     <Link className='mr-2' to='/login'> Login</Link>
     
      </div>
 <div className='btn w-20  p-2 rounded-md ml-2'>
 <Link to='/register'> Register </Link>
 </div>
 <div className="navbar-end ">
    {
      user ? 
      <>
      <span>{user.email}</span>
      <a onClick={handleSignOut} >Sign out</a>
      </>
      :
      <Link to = 'login'>Login</Link> 
    }
     
      </div>
    </div>
  );
};

export default Header;
