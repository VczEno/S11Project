import React, { useEffect } from 'react'
import { HomeAlbumRow } from '../components/HomeAlbumRow'
import { useSelector } from 'react-redux'


export const Homepage = () => {

    const search = useSelector (state => state.search)

/* let rockArtists = ['queen','u2','thepolice','eagles','thedoors','oasis','thewho','bonjovi'] */
/* let popArtists = [ 'maroon5', 'coldplay', 'onerepublic', 'jamesblunt', 'katyperry', 'arianagrande']
let hipHopArtists = ['eminem','snoopdogg','lilwayne','drake','kanyewest']
 */

    return (
        <div className="col-12 col-md-9 offset-md-3 mainPage">
            
            <div className="row">
                <div className="col-10">
                    
                </div>
            </div>
            <HomeAlbumRow artist='Queen'/> {/* per non impazzire con gli artisti da estrarre casualmente */}
            <HomeAlbumRow artist='John Coltrane'/>
            <HomeAlbumRow artist='Chet Baker'/>

        </div>

  )
}
