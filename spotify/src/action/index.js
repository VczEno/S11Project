//fav Action

import axios from "axios"

export const addTrackFav = (track) => {
    console.log('add to fav', track)
    return {type: 'ADD_TRACK', payload: track}
}

export const removeTrackFav = (track) => {
    console.log('remove from fav', track)
    return {type: 'REMOVE_TRACK', payload: track}
}

// playing Action

export const showOnPlayer = (track) => {
    console.log('add to player', track)
    return {type: 'SHOW_ON_PLAYER', payload: track}
}

// searchAction

export const getSearchData = (endpoint) => {
   
    return function(dispatch) { 
        axios.get(endpoint)
      .then(res => {
        console.log(res)
        return dispatch({ type: 'GET_SEARCH_DATA' , payload: res.data.data})
      }).catch(error => {
        console.log(error)
        
      })
    }
        
}


