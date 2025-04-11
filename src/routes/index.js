import React from 'react';
import { Navigate } from 'react-router-dom';

const Home = React.lazy(() => import('../components/Home'));
const About = React.lazy(() => import('../components/About'));
const Message = React.lazy(() => import('../components/Home/Message'));
const News = React.lazy(() => import('../components/Home/News'));
const Detail = React.lazy(() => import('../components/Home/News/Detail'));
const Chessboard = React.lazy(() => import('../components/Chessboard'));
const Demo = React.lazy(() => import('../components/Demo'));


const demos=[1,2,3,4,5,6,7,8,9,10,11,12]

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
    path:'/chessboard',
    element: <Chessboard />
  },
  {
    path:'/demo',
    element: <Demo />,
    children: demos.map((item,index)=>{
      const DemoComponent = React.lazy(()=>import(`../components/Demo/components/Demo${index+1}`))
      return {
        path:`demo${index+1}`,
        element: <DemoComponent />
      }
    })
  },
  {
    path:'/',
    element: <Navigate to="/home" replace/>
  }
]

export default element