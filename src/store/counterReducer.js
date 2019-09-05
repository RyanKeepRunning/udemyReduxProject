import * as actionTypes from './actions/actionTypes';
const initialState={
    counter:0,
    result:[]
}

const counterReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter:state.counter+1
            }
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter:state.counter-1
            }
        case actionTypes.ADD:
            return{
                ...state,
                counter:state.counter+action.payload.value
            }
        case actionTypes.SUBSTRACT:
            return {
                ...state,
                counter:state.counter-action.payload.value
            }
        case actionTypes.RECORD:
            return {
                ...state,
                result:[...state.result,{id:new Date(),value:state.counter}]
            }
        case actionTypes.DELETE:
            return {
                ...state,
                // result:state.result.slice(0,action.payload.value).concat(state.result.slice(action.payload.value+1)) if index is used as ID
                result:[...state.result].filter(record=>record.id!==action.payload.id)
            }
    }
    return state;
}
export default counterReducer;