// rcc
import React, { Component, Fragment } from 'react';

// phương thức render, nơi tạo ra giao diện của component
// muốn hiển thị giao diện như thế nào thì để trong return của phương thức render


// chú í: tên thẻ In hoa chữ cái đầu
// nd hiển thị phải được bao bọc trong 1 thẻ duy nhất
// bọc trong thẻ div hoặc thẻ Fragment
export default class CardRCC extends Component {
    render() {
        return (
            <Fragment>
                <div className='card w-25'>
                    <img src="https://i.pravatar.cc?img=10" alt="..." />
                    <div className='card-body'>
                        <p>CyberSoft</p>
                        <button className='btn btn-success'>Click me</button>
                    </div>
                </div>
            </Fragment>

        )
    }
}
