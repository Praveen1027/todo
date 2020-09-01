
import React from "react"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "green",
        textDecoration: "line-through"
    }
    const myClick = () => {
        alert("Task is started!");
    }
    
    return (
        
        <div  className="todo-item">
            <div>
            <div className="buttonload">    
                <div style={props.item.completed ? completedStyle: null}>
                       {props.item.id}.  {props.item.text}
                    <input 
                    type="checkbox" 
                    checked={props.item.completed} 
                   
                />
                
                </div>
                
            </div>
            <div>
                <div className="buttonload">
                <table >
                    <tr>
                        <td> 
                            <button  onClick={myClick} >
                            initiate
                            </button>
                        </td>
                        <td> 
                        <button  onClick={()=>props.handleClick(props.item.id)}>completed</button>
                        </td>
                        <td> 
                        <button  onClick={()=>props.handleReset(props.item.id)}>Redo</button>
                        </td>
                        <td>
                            <button onClick={()=> props.handleRemove(props.item.id)}>remove</button>
                        </td>       
                    </tr>    
                </table>    
                
                
               

                </div>
                
            </div>                   
            </div>    
        </div>    
    )
}

export default TodoItem