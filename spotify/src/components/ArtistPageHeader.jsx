import React from 'react'
import { Button } from 'react-bootstrap'

export default function ArtistPageHeader({artist}) {
  return (
    <div className="col-12 col-md-10 col-lg-10 mt-5">
    <h2 className="titleMain">{artist.name}</h2>
    <div id="followers">{artist.nb_fan} followers</div>
    <div className="d-flex justify-content-center" id="button-container">
      <Button className="btn btn-success mr-2 mainButton " id="playButton">
        PLAY
      </Button>
      <Button className="btn btn-outline-light mainButton " id="followButton">
        FOLLOW
      </Button>
    </div>
  </div>
  )
}
