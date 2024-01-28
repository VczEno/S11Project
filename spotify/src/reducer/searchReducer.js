const searchReducer = (initialState=[], action) => {

    switch (action.type) {
        case 'GET_SEARCH_DATA': {
            console.log(action.payload)
            return [...action.payload]
        }
        default:
            break;
    }
    
    return initialState;
}

export default searchReducer