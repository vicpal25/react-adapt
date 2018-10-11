import axios from 'axios';
import {
  SAVE_COMMENT,
  FETCH_COMMENTS,
  CHANGE_AUTH,
  AUTH_USER,
  AUTH_ERROR,
  FETCH_ATHLETE,
  FETCH_ACTIVITIES,
  FILTERED_ACTIVITIES
} from 'actions/types';

export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

export function fetchComments() {
  const response = axios.get('http://jsonplaceholder.typicode.com/comments');

  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}

export function fetchAthlete() {
  const response = axios.get('http://localhost:3090/getAthlete/11389513');

  return {
    type: FETCH_ATHLETE,
    payload: response
  };

}

export function fetchActivities() {
  const response = axios.get('http://localhost:3090/getActivities/11389513');

  return {
    type: FETCH_ACTIVITIES,
    payload: response
  }

}

export function fetchActivitiesFiltered(max) {
  const response = axios.get('http://localhost:3090/getActivities/11389513');

  return {
    type: FILTERED_ACTIVITIES,
    payload: response
  }

} 

export function featchAthletePreferences() {
  
  const response = axios.get('http://localhost:3090/getAthletePreferences/11389513');

  return {
    type: FILTERED_ACTIVITIES,
    payload: response
  }

} 


export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}

export const signup = (formProps, callback) => async dispatch => {

  try {

    const response = await axios.post('http://localhost:3090/signup', formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });

    localStorage.setItem('token', response.data.token);

    callback();

  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'EMAIL_IN_USE'
    })

  }

};


export const signin = (formProps, callback) => async dispatch => {

  try {

    const response = await axios.post('http://localhost:3090/signin', formProps);

    dispatch({
      type: AUTH_USER,
      payload: response.data.token
    });

    localStorage.setItem('token', response.data.token);

    callback();

  } catch (error) {
    dispatch({
      type: AUTH_ERROR,
      payload: 'Invalid Email Creds'
    })

  }

};

export const signout = () => {

  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: ''
  }

}