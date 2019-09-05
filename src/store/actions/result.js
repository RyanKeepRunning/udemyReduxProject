import * as actionTypes from './actionTypes';
export const record_sync = (counter)=>{
    return {
        type:actionTypes.RECORD,payload:{counter}
    }
}

export const record = (counter)=>{
    return dispatch=>{
        setTimeout(()=>{dispatch(record_sync(counter))},2000);
    }
}


export const del = (id)=>{
    return {
        type:actionTypes.DELETE,payload:{id}
    }
}