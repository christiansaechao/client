import * as api from '../api';
import { FETCH_ALL, CREATE, DELETE, UPDATE } from '../constants/actionTypes'; 

// Action Creators that return functions that have actions within them ( this is why we use thunk as middleware )
// We use thunk, so that we can return asynchronous functions. 
// The first function lets us return the asynch function since it's going to take some time 
// to receieve all the data that our dispatch action is requesting 

export const getPosts = () => async (dispatch) => {
    // all dispatches/actions have a type, in this case it's FETCH ALL the data from the api 
    // the payload or what's given back to us is the data from the api
    try{
        const { data } = await api.fetchPosts(); 
        dispatch({ type: FETCH_ALL, payload: data }); 
    } catch (error) {
        console.log(error); 
    }
}

export const createPost = (post) => async (dispatch) => {
    try{
        const { data } = await api.createPost(post); 
        dispatch({ type: CREATE, payload: data }); 
    } catch (error) {
        console.log(error); 
    }
}

export const updatePost = (id, post) => async (dispatch) => {
    try{
        const { data } = await api.updatePost(id, post); 
        dispatch({ type: UPDATE, payload: data }); 
    } catch (error) {
        console.log(error); 
    }
}

export const deletePost = (id) => async (dispatch) => {
    try {
        await api.deletePost(id); 
        dispatch( { type: DELETE, payload: id });
    } catch (error) {
        console.log(error); 
    }
}

export const likePost = (id) => async (dispatch) => {
    try{
        const { data } = await api.likePost(id); 
        dispatch({ type: UPDATE, payload: data }); 
    } catch (error) {
        console.log(error); 
    }
}