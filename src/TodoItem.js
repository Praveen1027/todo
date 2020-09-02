
import React from "react"
import Inprogress from "./inprogressList"

function TodoItem(props) {
    const completedStyle = {
        fontStyle: "italic",
        color: "green",
        textDecoration: "line-through"
    }
    const statusStyle = {
        fontStyle: "Bold",
        color: "Red",
        paddingTop : 20,
    }

    
    return (
        
        <div  className="todo-item">
            <div>
            <div className="buttonload">    
                <div style={props.item.completed ? completedStyle: null}>
                       {props.item.id}.  {props.item.text}
                    <input type="checkbox" checked={props.item.completed} />
                    <h3 style={(props.item.inprogress &&!props.item.completed) ? statusStyle : null }>
                       {(props.item.inprogress &&!props.item.completed) ?  <Inprogress /> : null}
                    </h3>
                </div>
                
            </div>
            <div>
                <div className="buttonload">
                <table >
                    <tr>
                        <td> 
                            <button onClick={() => props.handleStatus(props.item.id)} > initiate </button>
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