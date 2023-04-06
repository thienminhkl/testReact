import React, { Component } from 'react'

export default class CarColor extends Component {
    state = {
        srcImg: '/img/products/black-car.jpg',
        color:'black'
    }

    handleChangePic = (col) => {
        this.setState({
            color: col
        })
    }
  render() {
    return (
      <div className='container'>
        <img className='w-50 m-5' src={`/img/products/${this.state.color}-car.jpg`} alt="" />
        <div>
            <button className='btn btn-secondary m-2'
            onClick={() => {this.handleChangePic('black')}}
            >Black</button>
            <button className='btn btn-danger'
             onClick={() => {this.handleChangePic('red')}}
            >Red</button>
            <button className='btn btn-primary m-2'
             onClick={() => {this.handleChangePic('silver')}}
            >Silver</button>
            <button className='btn btn-warning'
             onClick={() => {this.handleChangePic('steel')}}
            >Steel</button>

        </div>
      </div>
    )
  }
}
