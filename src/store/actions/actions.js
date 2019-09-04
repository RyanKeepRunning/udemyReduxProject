export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADD = 'ADD';
export const SUBSTRACT = 'SUBSTRACT';
export const RECORD = 'RECORD';
export const DELETE = 'DELETE';

export const increment = ()=>{
    return {
        type:INCREMENT
    }
}

export const decrement = ()=>{
    return {
        type:DECREMENT
    }
}

export const add = (value)=>{
    return {
        type:ADD,payload:{value}
    }
}
export const substract = (value)=>{
    return {
        type:SUBSTRACT,payload:{value}
    }
}

export const record = (counter)=>{
    return {
        type:RECORD,payload:{counter}
    }
}

export const del = (id)=>{
    return {
        type:DELETE,payload:{id}
    }
}