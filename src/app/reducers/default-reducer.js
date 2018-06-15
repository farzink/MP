import * as actions from '../actions/default-action'


export const questionReducer = (state = {}, action) => {
    switch (action.type) {
        case actions.ADD_QUESTION:
            return Object.assign({}, state, {
                questions: [...state.questions, {
                    id: action.payload.id,
                    question: action.payload.question
                }
                ]
            })
        case actions.REMOVE_QUESTION:
            return Object.assign({}, state, {
                questions: state.questions.filter((question, index) => action.payload !== question.id)
            })
        case actions.UPDATE_QUESTION:
            return Object.assign({}, state, {
                questions: state.questions.map((question, index) => {
                    if (action.payload.id === question.id) {
                        question.question = action.payload.question
                        return question
                    }
                    return question
                })
            })
        default:
            return state
    }
}