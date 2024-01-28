import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {useParams } from 'react-router-dom'
import {Spinner} from 'react-bootstrap'
import SingleTrack from '../components/SingleTrack'
import AlbumPageCard from '../components/AlbumPageCard'
import { useSelector } from 'react-redux'

export const AlbumPage = () => {
  const [album, setAlbum] = useState([])
  const [tracks, setTracks] = useState([])
  const [loading, setLoading] = useState(false)
  const [errMsg, setErrMsg] = useState('')
  const { id } = useParams()
  const endpoint = "https://striveschool-api.herokuapp.com/api/deezer/album/" + id

const fav = useSelector(state => state.fav)

function showFav() {
  console.log('preferiti', fav)
}


  useEffect(() => {
    setErrMsg('')
    setLoading(true)
    axios.get(endpoint)
    .then(res => {
       console.log(res)
       setAlbum(res.data)
       setTracks(res.data.tracks.data)
       }).catch(error => {
        console.log(error)
        setErrMsg(error.message)
      }).finally(()=> setLoading(false))
  }, [])  


return (
  <>
  {loading && <Spinner></Spinner>}
  {errMsg && <h1 className='text-warning'>{errMsg}</h1>}
  {!loading && !errMsg && 

    <div className="row albumPage">
        <div className="col-md-3 pt-5 text-center" id="img-container">
          <AlbumPageCard album={album}/>
          <button onClick={showFav}>show Fav</button>
        </div>
        <div className="col-md-8 p-5">
          <div className="row">
            <div className="col-md-10 mb-5" id="trackList">
  
             {tracks.map((t, index) => <SingleTrack key={index} t={t} index={index}/>)}
            </div>
          </div>
        </div>
      </div>
}  
    </>
    )

}