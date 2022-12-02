// this is the reducer that handles actions/changes for all of the posts
// posts = [] is the initial state / state that's being passeed into the reducer 
// the reducer takes 2 parameters, state and the action that's dispatched to the reducer 

import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'; 

export default (posts = [], action) => {
    switch(action.type){
        case FETCH_ALL: 
            return action.payload; 
        case CREATE: 
            return [...posts, action.payload]; 
        case UPDATE:  
            return posts.map((post) => post._id === action.payload._id ? action.payload : post); 
        case DELETE: 
            return posts.filter((post) => post._id !== action.payload); 
        default: 
            return posts; 
    }
}