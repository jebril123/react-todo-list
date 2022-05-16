import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Todoinput from './component/TodoInput';
import Todolist from './component/TodoList';

// weak kaau ka

class App extends Component {
   state = {
      items: [],
      id: uuid(),
      item: '',
      editItem: false,
   };

   handleChange = (event) => {
      // console.log(name);

      this.setState({
         item: event.target.value,
      });
   };

   handleSubmit = (e) => {
      e.preventDefault();

      // const text = this.state.item;

      // if (text === "") {

      // }

      const newitem = {
         id: this.state.id,
         title: this.state.item,
      };

      const update = [...this.state.items, newitem];

      this.setState(
         {
            items: update,
            item: '',
            id: uuid(),
            editItem: false,
         }
         // () => console.log(this.state)
      );
   };
   clearList = () => {
      this.setState({
         items: [],
      });
   };
   handleDelete = (id) => {
      const itemdel = this.state.items.filter((item) => item.id !== id);

      this.setState({
         items: itemdel,
      });
   };
   handleEdit = (id) => {
      const itemdel = this.state.items.filter((item) => item.id !== id);
      const selecteditem = this.state.items.find((item) => item.id === id);

      this.setState({
         items: itemdel,
         item: selecteditem.title,
         id: id,
         editItem: true,
      });
   };
   render() {
      // console.log(this.state);
      return (
         <div>
            <div className="container">
               <div className="row">
                  <div className="col-10 mx-auto col-md-8 mt-5">
                     <h3 className="text-capitalize text-center">todo input</h3>
                     <Todoinput
                        item={this.state.item}
                        handleChange={this.handleChange}
                        handleSubmit={this.handleSubmit}
                        editItem={this.state.editItem}
                     />

                     <Todolist
                        items={this.state.items}
                        clearList={this.clearList}
                        handleDelete={this.handleDelete}
                        handleEdit={this.handleEdit}
                     />
                  </div>
               </div>
            </div>
         </div>
      );
   }
}

export default App;
