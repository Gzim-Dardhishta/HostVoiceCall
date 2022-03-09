import { combineReducers } from 'redux';
import { languageReducer } from './reducer/languageReducer';

const rootReducer = combineReducers({
    language: languageReducer,
});

export default rootReducer;