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
import PrivateRoutes from "./PrivateRoutes";
import Error from "../Pages/Error/Error";
import MyToyRow from "../Pages/MyToy/MyToyRow";



const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement:<Error></Error>,
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
                element:<PrivateRoutes><SingleDoll></SingleDoll></PrivateRoutes>,
                loader:({params})=>fetch(`https://dream-disney-server-site.vercel.app/categories/doll/${params.id}`)
            },
            {
                path:'/AddToy',
                element:<PrivateRoutes><AddToys></AddToys></PrivateRoutes>
            },
            {
                path:'/myToy',
                element:<PrivateRoutes><MyToy></MyToy></PrivateRoutes>
            },
            // {
            //     path:'/update/:id',
            //     element:<MyToyRow></MyToyRow>,
            //     loader:({params})=>fetch(`https://dream-disney-server-site-farhasuhi.vercel.app/myToys/${params.id}`)
            // }
        ]
    },
]);

export default router;