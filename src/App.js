import React, {Component} from 'react';
import logo from './logo.svg';
//import './App.css';
import uuid from 'uuid';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInpute';
import TodoList from './components/TodoList';

class App extends Component {

  state = {
    items: [{ id: 1, title: "wakeup" }, { id: 1, title: "wakeup" }],
    //id: uuid(),
    item: '',
    editItem: false
  };
  handelChange = (e) => { console.log('handel change') }
  handelSubmit = (e) => { console.log('handel submit') }
  clearList = () => { console.log('clear list') }
  handelDelete = (id) => { console.log(`handel delete ${id}`) }
  handelEdit = (id) => { console.log(`handel edit ${id}`) }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitilize text-center">
              todo input
            <TodoInput item={this.state.item} handelChange={this.handelChange} handelSubmit={this.handelSubmit} editItem={this.state.editItem}/>
              <TodoList items={this.state.items} clearList={this.clearList} handelDelete={this.handelDelete} handelEdit={this.handelEdit}/>
            </h3>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
