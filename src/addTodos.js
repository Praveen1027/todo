import React from 'react';
export default class AddTodos extends React.Component {
   constructor(props){
       super();
       this.state={
           todos:""
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this); 
   }
    
   handleChange = (event) => {
        this.setState({todos: event.target.value},console.log(this.state.todos));
   }

   handleSubmit=(event)=> {
    event.preventDefault();
    //console.log(this.state.todos,"Namaste");
    this.props.addTodos(this.state.todos);
    document.getElementById("modiji").reset();
  }

   render(){
        return(
            <div>
                <form className="form" id="modiji" onSubmit={this.handleSubmit} >
                        <input className ="formtext" type="text" name="name"  onChange={this.handleChange} />
                    
                    <input type="submit" value="Submit" />
                </form>
            </div>    
        )
    }
}