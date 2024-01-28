import React, { useEffect } from 'react'
import Next from '../assets/playerbuttons/Next.png'
import Play from '../assets/playerbuttons/Play.png'
import Previous from '../assets/playerbuttons/Previous.png'
import Repeat from '../assets/playerbuttons/Repeat.png'
import Shuffle from '../assets/playerbuttons/Shuffle.png'
import { Link } from 'react-router-dom'
import { Col, Image, Row } from 'react-bootstrap'
import {  useSelector } from 'react-redux';
import { FaHeart } from "react-icons/fa";


export const Player = () => {
const track = useSelector(state => state.playing[0])
const fav = useSelector(state => state.fav)


  return (
    <div className="container-fluid fixed-bottom bg-container pt-1">
      <Row>
        <Col className="col-6  offset-3 offset-md-4 offset-lg-5 text-white ">
        {track && <>
        <Image className='m-3' src={track.album.cover_small}/> <span>{track.artist.name} - {track.title}</span>
        {fav.find(t => t.id === track.id) && <FaHeart className=' m-3 text-success'/>}
        </> 
        
        }
        </Col >
        <Col>
        
        </Col>
        
      </Row>
      <div className="row">
        <div className="col-lg-10 offset-lg-2">
          <div className="row">
            <div
              className="col-6 col-md-4 col-lg-2 offset-3 offset-md-4 offset-lg-5 playerControls "
            >
              <div className="row flex-nowrap justify-content-center ">
                <Link className='w-25'>
                  <img src={Shuffle} alt="shuffle" />
                </Link>
                <Link className='w-25'>
                  <img src={Previous}alt="previous" />
                </Link>
                <Link className='w-25'>
                  <img src={Play} alt="play" />
                </Link>
                <Link className='w-25'>
                  <img src={Next} alt="next" />
                </Link>
                <Link className='w-25'>
                  <img src={Repeat} alt="repeat" />
                </Link>
              </div>
            </div>
          </div>
          <div className="row justify-content-center playBar py-3">
            <div className="col-8 col-md-6">
              <div className="progress">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow="0"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
