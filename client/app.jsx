import React from 'react';
import ReactDOM from 'react-dom';
// Example of connecting other files
import Searchbar from './searchbar.jsx';



class App extends React.Component {
  // Constructor and super isn't even needed for the most basic React
  constructor(props) {
    super(props)
    this.state = {
      someState: 'this is a state',
    }
    this.checkstuff = this.checkstuff.bind(this);
  }

  checkstuff() {
    console.log('fckkkk');
  }

  render() {
    return (
      <div>
        Hello World!~
        {/* Example: */}
        <Searchbar searchterm={this.state.somestate} checkFn={this.checkstuff} />
      </div>
    )
  }

}





ReactDOM.render(<App />, document.getElementById('app'));