import React, { useEffect, useState } from 'react'
import axios from 'axios'

export const HomeAlbumRow = ({artists, tag}) => {

const [albums, setAlbums] =useState()

let headers = new Headers({'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com', 'X-RapidAPI-Key': '9d408f0366mshab3b0fd8e5ecdf7p1b09f2jsne682a1797fa0' })


   useEffect(() => {
     axios.get('https://striveschool-api.herokuapp.com/api/deezer/search?q=queen')
     .then(res => {
        console.log(res)
        setAlbums(res.data)
        })
   
     return () => {
       
     }
   }, [])
   

  return (
    <>
<div className="row">
    <div className="col-10">
        <div id="rock">
            <h2>{tag}</h2>
            <div
                className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                id="rockSection"
            ></div>
        </div>
    </div>
</div>
</>
  )
}
