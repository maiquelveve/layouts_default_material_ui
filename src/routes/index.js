import React from 'react';
import DashboardLayout from '../layouts/DashboardLayout';
import MainLayout from '../layouts/MainLayout';
import Login from '../views/Auth';
import Home from '../views/Home';
import Register from '../views/Users/RegisterView';

const routes = [
    {
        path: '/app',
        element: <DashboardLayout />,
        children: [
            { path: '/', element: <Login /> },//mudar o componete dessa rota so com exemplo kkkk
            { path: '*', element: <h1>Página não encontrada!</h1> },
        ]
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Home /> },
            { path: '/login', element: <Login /> },
            { path: '/cadastrar', element: <Register /> },
            { path: '*', element: <h1>Página não encontrada!</h1> },
        ]
    }
]

export default routes;