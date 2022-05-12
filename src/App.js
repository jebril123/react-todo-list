import React, { Component } from 'react';
// import uuid from 'uuid';
import Todoinput from './component/TodoInput';
import Todolist from './component/TodoList';

export default class App extends Component {
   render() {
      return (
         <div>
            <div className="container">
               <div className="row">
                  <Todoinput />
                  <Todolist />
               </div>
            </div>
         </div>
      );
   }
}
