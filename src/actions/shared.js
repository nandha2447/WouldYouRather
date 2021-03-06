import {_getUsers, _getQuestions,_saveQuestionAnswer} from '../utils/_DATA'
import {receiveUsers} from './users'
import {receiveQuestions} from './questions'

//redux thunk pattern for handling asynchoronous request
export function handleGetUsers(){
    return (dispatch)=>{
        return _getUsers().then((res)=>{
            dispatch(receiveUsers(res))
        })
    }
}

export function handleGetQuestons(){
    return (dispatch) => {
        return _getQuestions().then((res)=>{
            dispatch(receiveQuestions(res))
        })
    }
}

export function saveQuestionAnswer(answerObj){
    return (dispatch) => {
        return _saveQuestionAnswer(answerObj).then((res)=>{
        })
    }
}
