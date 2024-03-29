import React, { Component } from 'react'
import Navbar from './components/Navbar'
import Counters from './components/Counters'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
        counters: [
            { id: 1, value: 0  },
            { id: 2, value: 0  },
            { id: 3, value: 0  },
            { id: 4, value: 0  },
        ]
    }
  }

  handleReset = () => {
    const counters = this.state.counters.map(c => {
        c.value=0
        return c;
    })
    this.setState({ counters })
  }

  handleIncrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value++
    this.setState({ counters })
  }

  handleDecrement = counter => {
    const counters = [...this.state.counters]
    const index = counters.indexOf(counter)
    counters[index] = { ...counter }
    counters[index].value = (counters[index].value-- <= 0) ? 0 : counters[index].value
    this.setState({ counters })
  }

  handleDelete = counterId => {
    const counters = this.state.counters.filter( c => c.id !== counterId )
    this.setState({
        counters // counters: counters (cause same key and value)
    })
  }

  render() {
    return (
      <React.Fragment>
        <Navbar totalCounters={ this.state.counters.filter(c => c.value > 0).length} />
        <main className="container">
          <Counters 
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    )
  }
}

export default App
