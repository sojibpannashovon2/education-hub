import React from 'react';
import error from '../../../assets/images/glitch-error-404-page_23-2148105404.avif'
import { Link } from 'react-router-dom';
const ErrorPage = () => {
    return (
        <div className=' '>
            <img className='w-[40%]  h-[30%] mx-auto flex justify-center items-center' src={error} alt="" />
            <div className='w-[70%] mx-auto'>
                <Link className='btn btn-outline w-[20%] mx-auto' to={`/`}>BacK to Home</Link>
            </div>


        </div>


    );
}

export default ErrorPage;