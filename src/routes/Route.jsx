
import { Children } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../Root/Root';
import Home from '../pages/Home';


const routers = createBrowserRouter([
    {
                path:'/',
                element:<Root></Root>,
                children:[
                    {
                        path:'/',
                        element:<Home></Home>
                    },


                ]
    },

           

]);

export default routers;