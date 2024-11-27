import React from "react";
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

        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.querySelector('#root'));
root.render(<RouterProvider router={appRouter} />);