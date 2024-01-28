import { applyMiddleware, combineReducers, createStore } from "redux"
import favReducer from "../reducer/favReducer"
import playingReducer from "../reducer/playingReducer"
import searchReducer from "../reducer/searchReducer"
import { thunk } from 'redux-thunk'
import { persistReducer, persistStore } from "redux-persist";
import { encryptTransform } from 'redux-persist-transform-encrypt';
import storage from "redux-persist/lib/storage"


const initialState = {
    fav: [],
    playing: [],
    search: [],
}

const persistConfig = {
    key: 'root', 
   storage,

    transform:[
        encryptTransform({
            secretKey:'spotify-app-key',
            onError: function (error) {
                console.log(error)
            },
        })]
}



const bigReducers = combineReducers({
    fav: favReducer,
    playing: playingReducer,
    search: searchReducer,
})
const persistedReducer =persistReducer(persistConfig, bigReducers)

export const store = createStore(persistedReducer, initialState, applyMiddleware(thunk))

export const persistor = persistStore(store)