import React, { useContext } from 'react';


import { Link } from 'react-router-dom';
import { authContext } from '../../../providers/AuthProvider';
import { FaUser, FaUserCheck, FaUserAlt, FaUserCircle, FaUserLock } from 'react-icons/fa';
const NavBar = () => {

    const { user, logout } = useContext(authContext)

    // console.log(cart);
    const handleLogOut = () => {
        logout()
            .then(() => {
                alert("Successfully LogOut")
            })
            .catch(error => {
                console.log(error);
            })
    }

    const navLink = <>

        <li>
            <Link>Home</Link>
        </li>
        <li>
            <Link>Colleges</Link>
        </li>

        <li> <Link>Admission</Link></li>
        <li> <Link>My College</Link></li>
    </>
    return (
        <div className="navbar  bg-black p-0  border border-indigo-400 text-white">
            <div className="">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {navLink}
                    </ul>
                </div>
                {/* <div>
                    <img className='w-18 h-12' src={logo} alt="" />
                </div>
                <a className="btn btn-ghost normal-case text-xl">Education-Hub</a> */}
            </div>
            <div className=" hidden lg:flex font-bold ">
                <ul className="menu menu-horizontal  gap-8">
                    {navLink}
                </ul>
            </div>


            {/* <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div> */}
            <div className="navbar-end justify-end">

                {
                    user ?
                        <>
                            {/* <FaUser></FaUser>
                            <FaUserCheck></FaUserCheck>
                            <FaUserAlt></FaUserAlt>
                            <FaUserCircle></FaUserCircle> */}
                            <FaUserLock className='w-10'></FaUserLock>
                            <span className='text-white mr-6'>{user.displayName}</span>
                            <li onClick={handleLogOut} className='btn btn-danger btn-sm'>LogOut</li>
                        </>
                        :
                        <Link to='/login' className="btn btn-sm">Login</Link>

                }


            </div>
        </div>
    );
};

export default NavBar;