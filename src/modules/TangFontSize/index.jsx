import React, { Component } from 'react'

export default class TangFontSize extends Component {
  state = {
    fSize: 30,
  }
  handleChangeFontSize = (size) => {
    this.setState({
      fSize: this.state.fSize + size
    })
  }

  render() {
    return (
      <div>
        <p style={{
          fontSize: `${this.state.fSize}px`
        }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsa nulla iure odit rem nobis consequatur eos nam, unde maiores.</p>
        
        <div>
          <button onClick={() => {
            // const newState = {
            //   fSize: this.state.fSize + 5
            // }
            // this.setState({fSize: this.state.fSize + 5});
            this.handleChangeFontSize(+5)
          }} className='btn btn-success m-2'>+</button>
          <button onClick={() => {
            // const newState = {
            //   fSize: this.state.fSize - 5
            // }
            // this.setState({fSize: this.state.fSize - 5});
            this.handleChangeFontSize(-5)
          }} className='btn btn-success'>-</button>
        </div>
      </div>
    )
  }
}
