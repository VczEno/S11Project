import React from 'react'

export default function AlbumPageCard({album}) {
    return (
        <>
            <img src={album.cover_big} className="card-img img-fluid" alt="Album" />
            <div className="mt-4 text-center">
                <p className="album-title">{album.title}</p>
            </div>
            <div className="text-center">
                {album.artist && <p className="artist-name">{album.artist.name}</p>} {/* senza questo controllo 'name' risulta undefined e react da errore, boh.. */}
            </div>
            <div className="mt-4 text-center">
                <button id="btnPlay" className="btn btn-success" type="button">Play</button>
            </div>
        </>
    )
}
