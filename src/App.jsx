import React, { useEffect, useState, useRef, Suspense } from 'react';
import { useRoutes } from 'react-router-dom';
import app from './App.module.css'
import MyNavLink from './components/MyNavLink';
import { useSelector, useDispatch } from 'react-redux';
import { asyncIncrement, asyncDecrement  } from './redux/count_action';
import MyContext from './context/MyContext';
import element from './routes';

function App() {
  const routes = useRoutes(element);
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  const button = useRef(null)
  useEffect(() => {
    console.log('count', count);  // 在React.strict模式下会打印两次
  }, [count]);
  useEffect(() => {
    console.log('button', button);
  }, []);
  return (
    <div>
      <div>
        同步
        {count}
        <button onClick={() => dispatch({ type: 'increment' })}>+</button>
        <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
      </div>
      <div>
        异步
        {count}
        <button onClick={() => dispatch(asyncIncrement())}>+</button>
        <button onClick={() => dispatch(asyncDecrement())}>-</button>
      </div>
      <div className={app.App}>
        <div className={app.nav}>
          <MyNavLink ref={button} to="/home">Home</MyNavLink>
          <MyNavLink to="/about">About</MyNavLink>
        </div>
        <Suspense fallback={<div>Loading...</div>  /* 路由懒加载*/}> 
          <MyContext.Provider value={{count:1}}>
            {routes}
          </MyContext.Provider>
        </Suspense>
      </div>
    </div>
  );
}

export default App;