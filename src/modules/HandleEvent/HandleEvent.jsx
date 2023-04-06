import React, { Component } from 'react'

export default class HandleEvent extends Component {
    alertMessage = () => {
        alert('muahaha')
    }
    sayMessage = (loiChao, name) => {
        console.log(loiChao + ' ' + name)
    }
    render() {
        return (
            <div>
                <button className='btn btn-success' onClick={this.alertMessage}>Click me 1</button>
                <button className='btn btn-success'
                    onClick={() => {
                        alert('Muhuhuhu')
                    }}
                >Click me 2</button>

{/* C1: anonymous func */}
                <button className='btn btn-primary'
                    onClick={() => {
                        this.sayMessage('Xin chao', 'Cyber Soft')
                        //Gọi nhiều hàm
                    }}
                >Click me 3</button>
{/* C2: dùng bind -> tạo ra một function mới gắn lại cho onclick */}
                <button className='btn btn-dark' onClick={this.sayMessage.bind(this, 'Xin chao', 'CyberSoft')}>Click me 4</button>

            </div>
        )
    }
}
