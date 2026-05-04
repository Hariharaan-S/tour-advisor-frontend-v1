import {compose, createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web


// root reducer
import {rootReducer} from './root-reducer';
        
const persistConfig = {
    key: 'root',
    storage: storage,
    blacklist: ['user'] // user reducer will not be persisted
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const middleWares = [logger];


export const store = createStore(
        persistedReducer,
        undefined,
        compose(applyMiddleware(...middleWares))
)

export const persistor = persistStore(store);