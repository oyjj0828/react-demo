import React from 'react'
import { Routes, Route, useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import MyNavLink from '../../MyNavLink'
import Detail from './Detail'

export default function News(props) {
    const [news, setNews] = useState([
        { id: 1, title: 'news1' },
        { id: 2, title: 'news2' },
        { id: 3, title: 'news3' }
    ])

    return (
        <div>
            <ul>
                {
                    news.map(item => {
                        // params传参
                        // return <MyNavLink to={`/home/news/detail/${item.id}`} key={item.id}>{item.title}</MyNavLink>
                        // search传参
                        // return <MyNavLink to={`/home/news/detail?id=${item.id}`} key={item.id}>{item.title}</MyNavLink>
                        // state传参
                        return (
                            <MyNavLink
                                to='/home/news/detail'
                                state={{ id: item.id }}
                                key={item.id}
                            >
                                {item.title}
                            </MyNavLink>
                        )
                    })
                }
            </ul>
            <Routes>
                <Route path="detail" element={<Detail />}></Route>
            </Routes>
        </div>
    )
}
