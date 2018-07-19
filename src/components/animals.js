import React, { Component } from 'react';
import AnimalItem from './animalItem'



class Animals extends Component {
  // What follows is the functions that are called
  // when App is called.

  // This grabs the animal data from the external JSON file



  render() {

    // What follows at RETURN is returned in wherever
    // App is called.

    let items;
    if (this.props.items) {
      items = this.props.items.map(item => {
        return <AnimalItem key={item.name} item={item}/>

      })
    }

    //We need to talk about what's going on here.
    // What is key doing?

   function createItem(items) {
     items.map(item => {
         return <AnimalItem key={item.name} item={item}/>
     })
   }
    return (
      <div className="Animals col-md-6">
      <table className="table table-dark">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Species</th>
            <th scope="col">Likes</th>
            <th scope="col">Dislikes</th>
          </tr>
        </thead>
        <tbody>
        {items}
        </tbody>
        <tfoot>
          <tr>
            <th scope="col"></th>
            <th scope="col"></th>
            <th scope="col"></th>
          </tr>
        </tfoot>
        </table>
      </div>
    );
  }
}

export default Animals;
