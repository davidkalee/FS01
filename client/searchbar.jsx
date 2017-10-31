import React from 'react';


class Searchbar extends React.Component {
  // Constructor and super isn't even needed for the most basic React
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        Searchbar shizz
        {/* Example: */}
        <div onClick={this.props.checkFn}> click me </div>
        <div>{this.props.searchterm}</div>
      </div>
    )
  }

}

export default Searchbar;