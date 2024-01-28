import React from 'react'
import { Link } from 'react-router-dom'

export default function AlbumCard({a, index}) {
    return (
        <>
          <div key={index} className="col text-center text-white" >
            <Link to={`/album/${a.album.id}`} >
              <img className="img-fluid" src={a.album.cover_medium} alt="1" />
            </Link>
            <p>
              <Link className='text-white text-decoration-none' to={`/album/${a.album.id}`} >
                Album: "{
                  a.album.title.length < 16
                    ? <span>{a.album.title}</span>
                    : <span>{a.album.title.substring(0, 16)}...</span>
                }"
                <br />
              </Link>
              <Link className='text-white text-decoration-none' to={`/${a.artist.name}/${a.artist.id}`}>
                Artist: {a.artist.name}
              </Link>
            </p>
          </div>
        </>
      )
}
