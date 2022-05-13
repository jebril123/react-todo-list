import React, { Component } from 'react';
import { v4 as uuid } from 'uuid';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Todoinput from './component/TodoInput';
import Todolist from './component/TodoList';

// weak kaau ka

class App extends Component {
   state = {
      items: [
         { id: 1, title: 'wake up' },
         { id: 2, title: 'make breakfast' },
      ],
      id: uuid(),
      item: '',
      editItem: false,
   };

   handleChange = (e) => {
      console.log('handle change');
   };
   handleSubmit = (e) => {
      console.log('handle change');
   };
   clearList = () => {
      console.log('clear list');
   };
   handleDelete = (id) => {
      console.log(`handle delete ${id}`);
   };
   handleEdit = (id) => {
      console.log(`handle edit ${id}`);
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
