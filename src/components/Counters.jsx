import React, { Component } from 'react'
import Counter from './Counter'
import { validate } from '@babel/types'

class Counters extends Component {
    render() {
        const { onReset, onDelete, counters, onIncrement } = this.props
        return (
            <div>
                <button 
                onClick={onReset}
                className="btn btn-primary btn-sm m-2">Reset</button>
                {counters.map(counter => 
                    <Counter 
                        counter={counter}
                        key={counter.id} 
                        onDelete={onDelete}
                        onIncrement={onIncrement}
                    />)}
            </div>
        )
    }
}

export default Counters
