import React from 'react'
import { useSelector } from 'react-redux'
import AlbumCard from '../components/AlbumCard'

export default function SearchResult() {
    const search = useSelector(state => state.search)


    return (
        <>

            <div className="row">
                <div className="col-10">

                    <h2>Search Results</h2>
                    <div
                        className="row row-cols-1 row-cols-sm-2 row-cols-lg-3 row-cols-xl-4 imgLinks py-3"

                    > {search.map((a, index) => <AlbumCard a={a} index={index} />)}

                    </div>
                </div>
            </div>

        </>
    )
}
  

