
export default function favReducer(state = [], action) {

    switch (action.type) {
        case 'ADD_TRACK':
            return [...state, action.payload] 
        
        case 'REMOVE_TRACK':
            return state.filter(t => t.id !== action.payload.id)
    

        default:
            break;
    }
    
    return state;
}
