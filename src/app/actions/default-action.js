export const ADD_QUESTION = "ADD_QUESTION"
export const REMOVE_QUESTION = "REMOVE_QUESTION"
export const UPDATE_QUESTION = "UPDATE_QUESTION"

import * as uuid4 from 'uuid/v4'

export const addQuestion = (question) => {
    question.id = uuid4()
    return {
        type: ADD_QUESTION,
        payload: question
    }
}

export const remvoeQuestion = (question) => {
    return {
        type: REMOVE_QUESTION,
        payload: question.id
    }
}

export const updateQuestion = (question) => {
    return {
        type: UPDATE_QUESTION,
        payload: question
    }
}