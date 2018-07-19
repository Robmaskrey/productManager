import React, { Component } from 'react';


class ProductItem extends Component {
  render() {

      console.log(this.props.item);

      function twoDecimals(num) {
        return num.toFixed(2);
      }

    return (
      <tr className='ProductItem'>
        <th scope="row">{this.props.item.id}</th>
        <td>{this.props.item.title}</td>
        <td>${twoDecimals(this.props.item.price)}</td>
        <td><button type="button" class="btn btn-danger"
        onClick={() => {this.props.handleRemoveProduct(this.props.item.id)} }>Remove Item</button></td>
      </tr>
    );
  }
}





export default ProductItem;
