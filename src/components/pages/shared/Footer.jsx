import React from 'react';
import logo from '../../../../public/Education hub.png'
import { FaFacebook, FaYoutube, FaGithub } from 'react-icons/fa';
const Footer = () => {
    return (

        <>
            <footer className="footer p-10 bg-base-200 text-base-content">
                <div>
                    <span className="footer-title">Services</span>
                    <a className="link link-hover">Admission</a>
                    <a className="link link-hover">Home Page</a>
                    <a className="link link-hover">Colleges</a>
                    {/* <a className="link link-hover">Advertisement</a> */}
                </div>
                <div>
                    <span className="footer-title">Our Contact</span>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    {/* <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a> */}
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-blue-400">
                <div className="items-center grid-flow-col">
                    <img className='w-18 h-12 border border-blue-700' src={logo} alt="" />
                    <p>Education Hub Ltd. <br />Providing reliable facilities since 2021</p>
                </div>
                <div className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/arifur.rahmansojib.7/">
                            <FaFacebook className='w-8 h-12' ></FaFacebook>
                        </a>
                        <a href="https://www.youtube.com/channel/UCIUfEtViFNKiD3VRDqFPQXA">

                            <FaYoutube className='w-8 h-12' ></FaYoutube>
                        </a>
                        <a href="https://github.com/sojibpannashovon2">

                            <FaGithub className='w-8 h-12' ></FaGithub>
                        </a>




                    </div>
                </div>
            </footer>
        </>

    );
};

export default Footer;