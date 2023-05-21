import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import SingleDoll from "../Pages/SingleDoll/SingleDoll";
import AllToys from "../Pages/AllToys/AllToys";
import AddToys from "../Pages/AddToy/AddToys";
import MyToy from "../Pages/MyToy/MyToy";
import Update from "../Pages/Update/Update";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
              path: "/",
              element: <Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/allToys',
                element:<AllToys></AllToys>,
            },
            {
                path:'/categories/:id',
                element:<SingleDoll></SingleDoll>,
                loader:({params})=>fetch(`https://dream-disney-server-site.vercel.app/categories/doll/${params.id}`)
            },
            {
                path:'/AddToy',
                element:<AddToys></AddToys>
            },
            {
                path:'/myToy',
                element:<MyToy></MyToy>
            },
            // {
            //     path:'/update/:id',
            //     element:<Update></Update>,
            //     loader:({params})=>fetch(`https://dream-disney-server-site-farhasuhi.vercel.app/myToys/${params.id}`)
            // }
        ]
    },
]);

export default router;