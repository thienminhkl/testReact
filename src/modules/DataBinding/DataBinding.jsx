import React, { Component } from 'react'

export default class DataBinding extends Component {
    product ={
        img: 'https://i.pravatar.cc/300',
        id: 'ID-5',
        title: 'Iphone 12',
        price: 9000,
    }
    sayMessage = () => {
        return 'Hello các bạn'
        //chú ý: - only return: string, number, jsx
    };
    render() {
        let title = 'Cyber Soft'
        return (
            <div>
                <div>Tên trung tâm: {title}</div>
                <p>Lời chào: {this.sayMessage()}</p>
                <div className="card w-25">
                    <img src={this.product.img} alt="" />
                    <div className="card-body">
                        <p>{this.product.title}</p>
                        <p>Price: {this.product.price}</p>
                    </div>
                </div>
            </div>

        )
    }
}
