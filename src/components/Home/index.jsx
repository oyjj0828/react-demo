import React, { useContext } from 'react'
import {Routes, Route, Outlet} from 'react-router-dom'
import MyNavLink from '../MyNavLink'
import home from './index.module.css'
import News from './News'
import Message from './Message'
import MyContext from '../../context/MyContext'

export default function Home(props) {
    console.log('from App', useContext(MyContext)); // 1
    return (
        <div>
            <div>Home</div>
            <div className={home.nav}>
                <MyNavLink to="news">news</MyNavLink>
                <MyNavLink to="message">message</MyNavLink>
            </div>
            <Outlet />
        </div>
    )
}
