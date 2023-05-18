import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../../Shared/Header/TopNav/TopNav';
import MainNav from '../../Shared/Header/MainNav/MainNav';
import LastNav from '../../Shared/Header/LastNav/LastNav';


const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <MainNav></MainNav>
            <LastNav></LastNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;