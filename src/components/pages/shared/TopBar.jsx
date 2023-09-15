import React from 'react';
import logo from '../../../../public/Education hub.png'
import { FaSearch } from 'react-icons/fa';
const TopBar = () => {
    return (
        <>
            <div className=' lg:flex justify-between bg-slate-100'>
                <div className='flex justify-center items-center'>


                    <img className='w-32 h-32 lg:border-r-2 border-blue-900' src={logo} alt="" />

                    <a className="btn btn-ghost text text-black normal-case lg:text-4xl">Education-Hub</a>
                </div>
                <div className=" py-8 flex justify-center items-center gap-4 mr-4">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                    <FaSearch className='w-8 h-8'></FaSearch>

                </div>

            </div>
        </>

    );
};

export default TopBar;