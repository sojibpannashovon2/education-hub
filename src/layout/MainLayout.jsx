import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/pages/shared/NavBar';
import Footer from '../components/pages/shared/Footer';
import TopBar from '../components/pages/shared/TopBar';

const MainLayout = () => {
    return (
        <div>
            <TopBar></TopBar>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;