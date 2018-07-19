import React, { Component } from 'react';

class AnimalItem extends Component {
  // What follows is the functions that are called
  // when App is called.
  render() {

    // What follows at RETURN is returned in wherever
    // App is called.
    return (
        <tr className="AnimalItem">
        <th scope="row">"{this.props.item.name}"</th>
        <td>{this.props.item.species}</td>
        <td>{this.props.item.foods.likes[0]+ ' '}
            {this.props.item.foods.likes[1]}
        </td>
        <td>{this.props.item.foods.dislikes[0]+ ' '}
            {this.props.item.foods.dislikes[1]}
        </td>

      </tr>
    );
  }
}

export default AnimalItem;
