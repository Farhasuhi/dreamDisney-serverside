import React from 'react';
import { Outlet } from 'react-router-dom';
import TopNav from '../../Shared/Header/TopNav/TopNav';

const Main = () => {
    return (
        <div>
            <TopNav></TopNav>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;