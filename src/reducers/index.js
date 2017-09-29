import {combineReducers} from 'redux';
import courses from './courseReducer';
import authors from './authorReducer';
import numOfAjaxCallsInProgress from './ajaxStatusReducer';

const rootReducer = combineReducers({
    courses, 
    authors,
    numOfAjaxCallsInProgress
});

export default rootReducer;