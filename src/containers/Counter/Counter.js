import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import {increment,decrement,add,substract,record,del} from '../../store/actions/actions';
import {connect} from 'react-redux';


class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
            default:

        }
    }

    render () {
        const {ctr,
               result,
               onIncrementCounter,
               onDecrementCounter,
               onCounterAdd,
               onCounterSubstract,
               onPutIntoRecord,
               onDeleteRecord} = this.props;
        return (
            <div>
                <CounterOutput value={ctr} />
                <CounterControl label="Increment" clicked={onIncrementCounter} />
                <CounterControl label="Decrement" clicked={onDecrementCounter}  />
                <CounterControl label="Add 5" clicked={()=>onCounterAdd(5)}  />
                <CounterControl label="Subtract 5" clicked={()=>onCounterSubstract(5)}  />
                <button onClick={()=>onPutIntoRecord(ctr)}>PUT INTO RECORD</button>
                <ul>
                    {result.map((record)=>{
                        return <li key={record.id} onClick={()=>onDeleteRecord(record.id)}>{record.value}</li>
                    })}
                </ul>
            </div>
        );
    }
}

Counter.defaultProps={
    
}

const mapStateToProps = (state)=>{
    return {
        ctr:state.counterReducer.counter,
        result:state.resultReducer.result
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return{
//         onIncrementCounter: ()=>dispatch(increment()),
//         onDecrementCounter:()=>dispatch(decrement()),
//         onCounterAdd:(value)=>dispatch(add(value)),
//         onCounterSubstract:(value)=>dispatch(substract(value)),
//         onPutIntoRecord:(counter)=>dispatch(record(counter)),
//         onDeleteRecord:(id)=>dispatch(del(id))
//     }
// }

const mapDispatchToProps =  {
        onIncrementCounter: increment,
        onDecrementCounter: decrement,
        onCounterAdd:add,
        onCounterSubstract:substract,
        onPutIntoRecord:record,
        onDeleteRecord:del
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);