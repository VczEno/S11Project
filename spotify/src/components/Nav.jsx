import React from 'react'
import { Link } from 'react-router-dom'

export const Nav = () => {
    return (
        <div className="col-12 col-md-9 offset-md-3 mainPage">
            <div className="row">
                <div className="col-9 col-lg-11 mainLinks d-none d-md-flex">
                    <Link>TRENDING</Link>
                    <Link>PODCAST</Link>
                    <Link>MOODS AND GENRES</Link>
                    <Link>NEW RELEASES</Link>
                    <Link>DISCOVER</Link>
                </div>
            </div>
        </div>
  )
}
