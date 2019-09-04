const redux = require('redux');
const createStore = redux.createStore;

const initialState = {
    counter:0
}

const rootReducer = (state=initialState,action)=>{
    switch(action.type){
        case 'INC_COUNTER':
            return {
                ...state,
                counter:state.counter+1
            }
        case 'ADD_COUNTER':
            return {
                ...state,
                counter:state.counter+action.value
            }
    }
}

const store = createStore(rootReducer);
store.subscribe(()=>{
    console.log('[Subscription]',store.getState())
})



const incAction = {type:'INC_COUNTER'};
const addAction = {type:'ADD_COUNTER',value:10}
store.dispatch(incAction);
store.dispatch(addAction);


