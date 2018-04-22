import {_getUsers} from '../utils/_DATA'
import {receiveUsers} from './users'
import {setAuthedUser} from './authedUser'

const AUTHED_USER = 'sarahedo'
//redux thunk pattern for handling asynchoronous request
export function handleGetUsers(){
    return (dispatch)=>{
        return _getUsers().then((res)=>{
            console.log(res);
            dispatch(receiveUsers(res))
            dispatch(setAuthedUser(AUTHED_USER))
        })
    }
}