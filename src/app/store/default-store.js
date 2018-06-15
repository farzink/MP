import { createStore } from 'redux'








import * as actions from '../actions/default-action'
import * as reducers from '../reducers/default-reducer'





export const defaultStore = createStore(reducers.questionReducer, {
    questions: []
})

export const storeTest = () => {
    defaultStore.dispatch(actions.addQuestion({
        id: 1,
        question: "question"
    }))


    defaultStore.dispatch(actions.addQuestion({
        id: 2,
        question: "question"
    }))
    
    defaultStore.dispatch(actions.addQuestion({
        id: 3,
        question: "question"
    }))

    
    defaultStore.dispatch(actions.remvoeQuestion({
        id: 2,
        question: "question"
    }))

    defaultStore.dispatch(actions.updateQuestion({
        id: 1,
        question: "new updated question"
    }))
    console.log(defaultStore.getState())
}


