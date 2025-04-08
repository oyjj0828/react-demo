import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('../components/Home'));
const About = React.lazy(() => import('../components/About'));
const Message = React.lazy(() => import('../components/Home/Message'));
const News = React.lazy(() => import('../components/Home/News'));
const Detail = React.lazy(() => import('../components/Home/News/Detail'));

const element = [
  {
    path:'/home',
    element: <Home />,
    children: [
      {
        path:'news',
        element: <News />,
        children: [
          {
            path:'detail',
            element: <Detail />
          }
        ]
      },
      {
        path:'message',
        element: <Message />
      }
    ]
  },
  {
    path:'/about',
    element: <About />
  },
  {
    path:'/',
    element: <Navigate to="/home" replace/>
  }
]

export default element