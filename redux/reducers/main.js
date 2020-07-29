import {combineReducers,applyMiddleware,createStore} from 'redux';
import thunk from 'redux-thunk';
import {conversationsReducer} from './conversations';

const rootReducer=combineReducers({
    conversationsReducer
});

export default function configureStore() {
    return createStore(rootReducer,applyMiddleware(thunk))
}
