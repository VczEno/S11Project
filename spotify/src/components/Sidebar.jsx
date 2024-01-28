import React, { useEffect } from 'react'
import Logo from '../assets/Spotify_Logo.png'
import { Link } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import axios from 'axios';
import { getSearchData } from '../action';

export const Sidebar = () => {

const [query, setQuery] = useState('')
const searchRes = useSelector(state => state.search)
const [loading, setLoading] = useState(false)
const [errMsg, setErrMsg] = useState('')
const dispatch=useDispatch()
const endpoint='https://striveschool-api.herokuapp.com/api/deezer/search?q='+query

/* useEffect(() => {
    setErrMsg('')
    setLoading(true)
    axios.get(endpoint)
    .then(res => {
       console.log(res.data.data)
       }).catch(error => {
        console.log(error)
        setErrMsg(error.message)
      }).finally(()=> setLoading(false))
  }, [])   */

  useEffect(() => {
console.log(query)
  }, [query])



/* nel render fare map dei risultati  */

    return (

        <div className="col-2">
            <nav
                className="navbar navbar-expand-md navbar-white bg-navbar fixed-left justify-content-between"
                id="sidebar"
            >
                <div className="nav-container">
                    <Link className="navbar-brand" to='/'>
                        <img
                            src={Logo}
                            alt="Spotify_Logo"
                            width="131"
                            height="40"
                        />
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-toggle="collapse"
                        data-target="#navbarNavAltMarkup"
                        aria-controls="navbarNavAltMarkup"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <ul>
                                <li> {/* INSERIRE ICONE HOME E LIBRARY */}
                                    <Link className="nav-item nav-link" to='/' >
                                        <FaHome /> Home
                                    </Link>
                                </li>
                                <li>
                                    <Link className="nav-item nav-link" to='/yourLibrary'>
                                        <FaBookOpen /> YourLibrary
                                    </Link>

                                </li>
                                <li>
                                    <div className="input-group mt-3">
                                        <input
                                            type="text"
                                            className="form-control mb-2"
                                            id="searchField"
                                            placeholder="Search"
                                            aria-label="Search"
                                            aria-describedby="basic-addon2"
                                            onChange={(e)=> setQuery(e.target.value)}
                                        />
                                        <div
                                            className="input-group-append"
                                        /* style={{margin-bottom: 4 + %}} */
                                        >
                                            <Link to='/searchResult'
                                                className="btn btn-outline-secondary btn-sm"
                                                type="button"
                                                id="button-addon1"
                                                onClick={() => dispatch(getSearchData(endpoint))}
                                            >
                                                GO
                                            </Link>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="nav-btn">
                    <Link className="btn signup-btn">Sign Up</Link>
                    <Link className="btn login-btn" >Login</Link>
                    <Link >Cookie Policy</Link> |
                    <Link > Privacy</Link>
                </div>
            </nav>
        </div>
    )
}
