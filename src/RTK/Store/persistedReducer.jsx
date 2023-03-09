import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import { combineReducers } from 'redux';
import cartReducer from "../Slices/CartSlices";

    const persistConfig = {
        key: 'persistLocal',
        storage,
    };
  
  const rootReducer = combineReducers({
    allCart: cartReducer,
    // Other reducers, if any
  });
  
  const persistedReducer = persistReducer(persistConfig, rootReducer);
  
  export default persistedReducer;