import React from 'react';
import TodoItem from "./TodoItem";
import todosData from "./todosData";
import AddTodos from "./addTodos"
import './App.css';


class App extends React.Component {
  constructor() {
      super()
      this.state = {
          todos: todosData
      }
      this.handleClick = this.handleClick.bind(this)
      this.handleRemove = this.handleRemove.bind(this)
      this.handleReset = this.handleReset.bind(this)
      this.addTodos = this.addTodos.bind(this)
      this.handleStatus = this.handleStatus.bind(this)

  }
  
  handleClick=(id)=> {
      this.setState(prevState => {
          const updatedTodos = prevState.todos.map(todo => {
              if (todo.id === id && todo.completed===false) {
                  // todo.completed = !todo.completed
                  return {...todo,completed:!todo.completed,inprogress:false}
              }
              return todo
          })
          return {
              todos: updatedTodos
          }
      })
  }
  handleReset=(id)=> {
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id ) {
                // todo.completed = !todo.completed
                return {...todo,completed:false,inprogress:false}
            }
            return todo
        })
        return {
            todos: updatedTodos
        }
    })
  } 
  handleStatus=(id)=> {
    this.setState(prevState => {
        const updatedTodos = prevState.todos.map(todo => {
            if (todo.id === id ) {
                // todo.completed = !todo.completed
                return {...todo,inprogress:true}
            }
            return todo
        })
        return {
            todos: updatedTodos
        }
    })
  } 
  addTodos=(todo)=>{
    this.setState(prevState => {
        const idt = prevState.todos[prevState.todos.length-1].id ;
        // console.log( prevState.todos[prevState.todos.length-1].id,"id here")
        let temp = {
            id : idt+1,
            text : todo,
            completed : false,
            inprogress : false
        }
        const updatedTodos = [...this.state.todos, temp];
        return {
            todos : updatedTodos
        }
    });
  }
  handleRemove=(id)=>{
    this.setState(prevState => {
        const newArr = prevState.todos.filter(todo => (todo.id !== id))
        return {
            todos: newArr
        }
    })
  }

  render() {
  const todoItems = this.state.todos.map((item) => {
    return(  
    <TodoItem key={item.id} item={item} handleClick={this.handleClick} handleReset={this.handleReset}
            handleRemove={this.handleRemove} handleStatus={this.handleStatus}/>
    )
  })
      
      return (
          <div >
              
            <div className="todo-list">
            <div style={{marginTop : 30, display:'block'}}>
              <AddTodos addTodos={this.addTodos}/>
            </div> 
              {todoItems}
              
            </div>  
             
          </div>
      )    
  }
}
export default App;
