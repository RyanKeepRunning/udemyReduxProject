import * as actionTypes from '../actions';
const initialState={
    result:[]
}

const resultReducer = (state = initialState,action)=>{
    switch(action.type){
        case actionTypes.RECORD:
            return {
                ...state,
                result:[...state.result,{id:new Date(),value:action.payload.counter}]
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
export default resultReducer;