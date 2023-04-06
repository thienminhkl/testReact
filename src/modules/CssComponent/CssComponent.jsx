import React, { Component } from 'react';
//? c1: ảnh hưởng toàn bộ project
import './style.css';
//? c2: import từ module
import Styles from './style2.module.css';

function mergeClassName(...rest) {

    return rest.join(' ');
}

export default class CssComponent extends Component {
    render() {
        const styleInline = {
            color: 'yellow',
            fontSize: '80px',
            backgroundColor: 'pink'
        }
        return (
            <div>
                <h1 className={mergeClassName(Styles.TextRed, Styles.FontSize)}>Cyber Soft</h1>
                <p className={Styles['text-blue']}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis fugit, commodi debitis dignissimos delectus ut eos, voluptatem dolor quia officiis maiores ipsum ea alias ad dolore adipisci at totam vitae dolores consequuntur minima quibusdam aliquam labore? Magni, quos? Iste ea illo, laudantium corporis laboriosam nemo! Impedit temporibus cumque, suscipit illum eaque ullam, iste mollitia ipsum dolorum nobis corporis! Possimus itaque tempore in iste asperiores, praesentium, adipisci nam aspernatur minus iure nisi aliquam illo veritatis, nostrum recusandae officia! Et, nihil harum. Fugit aperiam dignissimos harum quae necessitatibus molestias ratione debitis ad perspiciatis repudiandae fugiat, vitae animi ipsa culpa provident optio laborum.</p>
                <p style={styleInline}>
                    Lorem ipsum dolor sit amet.
                </p>
            </div>
        )
    }
}
