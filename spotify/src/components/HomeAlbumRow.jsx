import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import AlbumCard from './AlbumCard'

export const HomeAlbumRow = ({ artist }) => {

  const [albums, setAlbums] = useState([])

  useEffect(() => {
    axios.get('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artist)
      .then(res => {
        console.log(res)
        setAlbums(res.data.data)
        console.log(albums)
      })


  }, [])


  return (
    <>

      <div className="row">
        <div className="col-10">
          <div id="rock">
            <h2>Best of {artist}</h2>
            <div
              className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
              id="rockSection"
            > {albums.slice(0, 4).map((a, index) => <AlbumCard a={a} index={index} />)}
        
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
