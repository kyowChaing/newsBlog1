
import { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../pages/Home';
import LogIn from '../pages/LogIn';
import About from '../pages/About';
import Career from '../pages/Career';
import Add from '../pages/Add';
import Register from '../pages/Register';
import NewsDetails from '../pages/NewsDetails';


const routers = createBrowserRouter([
    {
                path:'/',
                element:<Root></Root>,
                children:[
                    {
                        path:'/',
                        element:<Home></Home>
                    },
                    {
                        path:'/login',
                        element:<LogIn></LogIn>
                    },
                    {
                        path:'/about',
                        element:<About></About>
                    },
                    {
                        path: '/career',
                        element: <Career></Career>
                    },
                    {
                        path:'/register',
                        element:<Register></Register>
                    },
                    {
                        path:'/news/:id',
                        element:<NewsDetails></NewsDetails>,

                    },

                   

                ]
    },

    {
        path:'/add',
        element:<Add></Add>

    },

    {
        path:'/category/:name',
        element: <Home></Home>,
    },

           

]);

export default routers;