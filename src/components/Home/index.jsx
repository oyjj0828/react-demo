import React from 'react'
import {Routes, Route} from 'react-router-dom'
import MyNavLink from '../MyNavLink'
import home from './index.module.css'
import News from './News'
import Message from './Message'

export default function Home(props) {
    return (
        <div>
            <div>Home</div>
            <div className={home.nav}>
                <MyNavLink to="/home/news">news</MyNavLink>
                <MyNavLink to="/home/message">message</MyNavLink>
            </div>
            <Routes>
                <Route path="/news/*" element={<News />}></Route>
                <Route path="message" element={<Message />}></Route>
            </Routes>
        </div>
    )
}
