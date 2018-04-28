import {_saveQuestionAnswer} from '../utils/_DATA'
 
export const SAVE_ANSWER = 'SAVE_ANSWER'

function saveAnswer({authedUser, qid, answer }){
    return {
        type: SAVE_ANSWER,
        authedUser,
        qid,
        answer
    }
}

export function handleSaveAnswer(info){
    return (dispatch) => {
        dispatch(saveAnswer(info))
        return _saveQuestionAnswer(info).catch((e)=>{
            console.warn('Error in handleSaveAnswer',e)
            dispatch(saveAnswer(info))
            alert('There was an error saving answer. Try again')
        })
    }
}