import {userSubmitted, userLoggedIn, userUpdated} from '../reducers/user.js';

export const USER_SUBMITTED = 'USER_SUBMITTED';
export const USER_CREATED = 'USER_CREATED';
export const USER_UPDATED = 'USER_UPDATED';

export const createAction = user => dispatch => dispatch(userLoggedIn(user));
export const updateAction = user => dispatch => dispatch(userUpdated(user));
export const submitAction = user => dispatch => dispatch(userSubmitted(user));

//TODO add this shit
/*export const submit = user => dispatch =>*/
//api.submit(user).then(user => {
//console.log('submitted', user);
//dispatch(userSubmitted(user));
//});

