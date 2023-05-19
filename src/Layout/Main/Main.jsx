import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../../Shared/Header/TopNav/TopNav';
import MainNav from '../../Shared/Header/MainNav/MainNav';
import LastNav from '../../Shared/Header/LastNav/LastNav';
import Footer from '../../Shared/Footer/Footer';


const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <MainNav></MainNav>
            <LastNav></LastNav>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;