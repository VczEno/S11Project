import React from 'react'
import { HomeAlbumRow } from '../components/HomeAlbumRow'

export const Homepage = () => {

let rockArtists = ['queen','u2','thepolice','eagles','thedoors','oasis','thewho','bonjovi']
let popArtists = [ 'maroon5', 'coldplay', 'onerepublic', 'jamesblunt', 'katyperry', 'arianagrande']
let hipHopArtists = ['eminem','snoopdogg','lilwayne','drake','kanyewest']

    return (
        <div className="col-12 col-md-9 offset-md-3 mainPage">
            
            <div className="row">
                <div className="col-10">
                    <div id="searchResults" className='d-none' /* style="display: none" */>
                        <h2>Search Results</h2>
                        <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                        ></div>
                    </div>
                </div>
            </div>
            <HomeAlbumRow artists={rockArtists} tag='Rock Classics'/>
            {/* <HomeAlbumRow artists={popArtists}/>
            <HomeAlbumRow artists={hipHopArtists}/> */}


            <div className="row">
                <div className="col-10">
                    <div id="rock">
                        <h2>Rock classics</h2>
                        <div
                            className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"
                            id="rockSection"
                        ></div>
                    </div>
                </div>
            </div>
            
            
        </div>

  )
}
