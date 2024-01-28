const playingReducer = (initialState=[], action) => {

    switch (action.type) {
        case 'SHOW_ON_PLAYER': {
            return [action.payload]
        }
        default:
            break;
    }
    
    return initialState;
}

export default playingReducer