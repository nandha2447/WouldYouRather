import {_getUsers, _getQuestions} from '../utils/_DATA'
import {receiveUsers} from './users'
import {receiveQuestions} from './questions'

//redux thunk pattern for handling asynchoronous request
export function handleGetUsers(){
    return (dispatch)=>{
        return _getUsers().then((res)=>{
            console.log(res);
            dispatch(receiveUsers(res))
        })
    }
}

export function handleGetQuestons(){
    return (dispatch) => {
        return _getQuestions().then((res)=>{
            console.log(res);
            dispatch(receiveQuestions(res))
        })
    }
}