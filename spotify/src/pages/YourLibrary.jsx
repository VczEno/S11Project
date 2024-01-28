import React from 'react'
import { useSelector } from 'react-redux'
import SingleFavTrack from '../components/SingleFavTracks'


export default function YourLibrary() {

    let favs =useSelector(state => state.fav)
    console.log(favs)


    return (
    <div className="col-md-8 p-5">
          <div className="row">
            <div className="col-md-10 mb-5" id="trackList">
             {favs.map((t, index) => <SingleFavTrack key={index} t={t} index={index}/>)} {/* aggiungere operatore ternario che mostra messaggio in caso di array preferiti vuoto */}
            </div>
          </div>
        </div>
  )
}
