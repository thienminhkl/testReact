import React, { Component } from 'react'

export default class RenderArray extends Component {
  products = [
    {
      id: 1,
      name: 'black car',
      img: '/img/products/black-car.jpg',
    },
    {
      id: 2,
      name: 'red car',
      img: '/img/products/red-car.jpg',
    },
    {
      id: 3,
      name: 'silver car',
      img: '/img/products/silver-car.jpg',
    },
    {
      id: 4,
      name: 'steel car',
      img: '/img/products/steel-car.jpg',
    },
  ];

  renderProduct = () => {
    // const listProducts = [];
    // for (const item of this.products) {
    //     const text = 
    //    ( <tr className='m-2'>
    //       <th>{item.id}</th>
    //       <th>{item.name}</th>
    //       <th ><img className="w-25" src={item.img}/></th>
    //     </tr>)
    //     ;
    //     listProducts.push(text)
    // }

    const listProducts = this.products.map((item) => {
      const text = (
        <tr className='m-2'>
          <th>{item.id}</th>
          <th>{item.name}</th>
          <th><img className="w-25" src={item.img} /></th>
        </tr>
      );
      return text;
    })
    return listProducts;
  }

  render() {

    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>
            {/* {this.renderProduct()} */}

            {this.products.map((item, index) => <tr className='m-2' key={index}>
              <th>{item.id}</th>
              <th>{item.name}</th>
              <th><img className="w-25" src={item.img} /></th>
            </tr>)}
          </tbody>
        </table>
      </div>
    )
  }
}
