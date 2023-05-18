import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../../Shared/Header/TopNav/TopNav';
import MainNav from '../../Shared/Header/MainNav/MainNav';

const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <MainNav></MainNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;