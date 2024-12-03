import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Body from "./src/components/Body";
import Headers from "./src/components/Header";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/components/About";
import Error from './src/components/Error'
import Contact from './src/components/Contact'
import RestrauantMenu from './src/components/RestrauntMenu'



const AppLayout = () => {
    return (
        <div className="app">
            <Headers />
            <Outlet />
        </div>
    )
};


const Grocery = lazy(() => import('./src/components/GroceryOnline'));

const appRouter = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: <Body />,
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/restraunt/:resId',
                element: <RestrauantMenu />
            }
            , {
                path: '/grocery',
                element: (<Suspense fallback={<h2>Loading....</h2>}>  <Grocery /></Suspense>)
            }

        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter} />);