import { combineReducers } from 'redux';


const users = (state = [], action) => {
    switch(action.type){
        case 'ASSIGN':
            return action.payload;
        default:
            return state;
    }
};

const searching = (state = false, action) => {
    switch(action.type){
        case 'TOGGLE':
            return action.payload;
        default:
            return state;
    };
};

const found = (state = [], action) => {
    switch(action.type){
        case 'ASSIGN_FOUND':
            return action.payload;
        default:
            return state;
    }
};

const reducers = combineReducers({
    users: users,
    searching: searching,
    found: found
});

export default reducers;