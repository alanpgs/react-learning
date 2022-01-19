import { Component } from 'react'
import './App.css'

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'Alan Sha Salim',
      datas: [],
    }
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(json => this.setState.datas = json)
  }

  render() {
    return (
     <div>
        <h1>{this.state.name}</h1>
         <ul>
          {
            setTimeout(function() {
              this.state.datas.map(data=> (<li key={data.id}>{data.name}</li>) )
            }, 500)
          }  
        </ul> 
     </div>
    ) 
  }
}

export default App
