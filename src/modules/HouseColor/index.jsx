import React, { Component } from 'react'

class iconHouse extends Component {
    render() {
        return <div>index</div>
    }
}

export default class HouseColor extends Component {
    state = {
        bgColor: 'blue'
    }

    handleSetBgColor = (color) => {
        this.setState({
            bgColor: color
        })
    }

    render() {
        return (
            <div>
                {/* <iconHouse /> */}
                <div style={{
                    width: 100,
                    height: 100,
                    backgroundColor: this.state.bgColor
                }}></div>
                <div>
                    <button
                        className='btn m-2'
                        style={{
                            backgroundColor: 'red'
                        }}
                        onClick={() => {this.handleSetBgColor('red')}}
                    >Red</button>
                    <button
                        className='btn'
                        style={{
                            backgroundColor: 'blue'
                        }}
                        onClick={() => {this.handleSetBgColor('blue')}}
                    >Blue</button>
                    <button
                        className='btn m-2'
                        style={{
                            backgroundColor: 'green'
                        }}
                        onClick={() => {this.handleSetBgColor('green')}}
                    >Green</button>
                </div>
            </div>
        )
    }
}
