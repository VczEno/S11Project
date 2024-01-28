import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { Button } from 'react-bootstrap';
import { useDispatch} from 'react-redux'
import { addTrackFav, removeTrackFav, showOnPlayer } from '../action';

export default function SingleTrack({t, index}) {

const dispatch=useDispatch()

    return (
        <div key={index} className="py-3 trackHover">
          <Link className="card-title trackHover px-3 trackInfo" onClick={() => dispatch(showOnPlayer(t))} >{
            t.title
          }</Link>
          <small className="trackInfo">{Math.floor(
            parseInt(t.duration) / 60 // setting the duration minutes
          )}:{
              parseInt(t.duration) % 60 < 10
                ? "0" + (parseInt(t.duration) % 60) // checking che duration seconds, if they are less than 10 a 0 is prefixed
                : parseInt(t.duration) % 60
            }</small>
          
            <Button className='float-end btn-danger' onClick={() => dispatch(removeTrackFav(t))} >
            <FaRegHeart />
            </Button>

            <Button className='float-end btn-success' onClick={() => dispatch(addTrackFav(t))}>
            <FaHeart />
            </Button>
            
        </div>
      )
}
