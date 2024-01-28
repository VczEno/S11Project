import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Spinner } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import AlbumCard from '../components/AlbumCard'
import ArtistPageHeader from '../components/ArtistPageHeader'

export const ArtistPage = () => {

  const [artist, setArtist] = useState([])
  const [albums, setAlbums] = useState([])

  const [loading, setLoading] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const [loading2, setLoading2] = useState(false)
  const [errMsg2, setErrMsg2] = useState('')
  const { artistName, id } = useParams()
  const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/artist/" + id

  useEffect(() => {
    setErrMsg('')
    setLoading(true)
    setErrMsg2('')
    setLoading2(true)


    axios.get(endpoint)
      .then(res => {
        console.log(res)
        setArtist(res.data)
      }).catch(error => {
        console.log(error)
        setErrMsg(error.message)
      }).finally(() => setLoading(false))

    axios.get('https://striveschool-api.herokuapp.com/api/deezer/search?q=' + artistName)
      .then(res => {
        console.log(res)
        setAlbums(res.data.data)
      }).catch(error => {
        console.log(error)
        setErrMsg2(error.message)
      }).finally(() => setLoading2(false))

  }, [])


  return (
    <>
      {loading && loading2 && <Spinner></Spinner>}
      {(errMsg || errMsg2) && <h1 className='text-warning'>{errMsg} {errMsg2}</h1>}
      {!loading && !errMsg &&
      <>
      <div className="row">
        <ArtistPageHeader artist={artist}/>
       
      </div>
      <div className="row mb-3">
        <div className="col-10 offset-1 col-md-10 col-lg-10 p-0">
          <div className="mt-4 d-flex justify-content-start">
            <h2 className="text-white font-weight-bold">Tracks</h2>
          </div>
          <div className="pt-5 mb-5">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3" id="apiLoaded">

              {albums.map((a, index) => <AlbumCard a={a} index={index}/>)}
             
            </div>
          </div>
        </div>
      </div>
      </>
      }

    </>
  )
}
