import axios from 'axios';
import {
  SAVE_COMMENT,
  FETCH_COMMENTS,
  CHANGE_AUTH,
  AUTH_USER,
  AUTH_ERROR,
  FETCH_ATHLETE,
  FETCH_ACTIVITIES,
  FILTERED_ACTIVITIES,
  FETCH_ACTIVITY,
  PREFERENCES
} from 'actions/types';

// const DEV_API = 'https://n8itikas80.execute-api.us-east-2.amazonaws.com/dev/';

const DEV_API = 'http://localhost:3090';


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

export function fetchAthlete(athlete_id) {

  const response = axios.get(DEV_API + '/athlete/' + athlete_id);

  return {
    type: FETCH_ATHLETE,
    payload: response
  };

}
export function fetchActivities(strava_id) {
  const response = axios.get(DEV_API + '/activities/' + strava_id);

  return {
    type: FETCH_ACTIVITIES,
    payload: response
  }

}

export function fetchActivity(activity_id) {

  let response = axios.get(DEV_API + '/activity/' + activity_id);

  console.log('responsa');
  console.log(response.data);

  return {
    type: FETCH_ACTIVITY,
    payload: response
  }

}

export function fetchActivitiesFiltered(max, strava_id) {
  const response = axios.get(DEV_API + '/activities/' + strava_id);

  return {
    type: FILTERED_ACTIVITIES,
    payload: response
  }

} 

export function fetchPreferences(strava_id) {
  
  const response = axios.get(DEV_API + '/preferences/' + strava_id);

  return {
    type: PREFERENCES,
    payload: response
  }

} 

export function updatePreferences  (strava_id, payload)  {

  try {

    const response = axios.put(DEV_API + '/preferences/' + strava_id, payload);

    return {
      type: PREFERENCES,
      payload: response
    }

    
  }
    catch(ex) {

    return{
      type: AUTH_ERROR,
      payload: 'UPDATE_ERROR'
    }

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

    const response = await axios.post(DEV_API + '/signup', formProps);

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