import {userSubmitted, userLoggedIn, userUpdated} from '../reducers/user.js';

export const USER_SUBMITTED = 'USER_SUBMITTED';
export const USER_CREATED = 'USER_CREATED';
export const USER_UPDATED = 'USER_UPDATED';

export const create = user => dispatch => dispatch(userLoggedIn(user));

export const update = user => dispatch => dispatch(userUpdated(user));

//TODO add this shit
/*export const submit = user => dispatch =>*/
//api.submit(user).then(user => {
//console.log('submitted', user);
//dispatch(userSubmitted(user));
//});

export const submit = user => dispatch => dispatch(userSubmitted(user));
