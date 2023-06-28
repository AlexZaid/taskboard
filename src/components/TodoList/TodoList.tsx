import React from 'react'
import './TodoList.css'
import { Todo } from '../../model';
import SingleTodo from './SingleTodo';
import { Droppable } from '@hello-pangea/dnd';

interface Props{
    todos:Todo[];
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
    completedTodos:Todo[];
    setCompletedTodos:React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList: React.FC<Props> = ({ 
  todos, 
  setTodos,
  completedTodos,
  setCompletedTodos
}) => {
  console.log(completedTodos);
  return ( 
  <div className="container">
    <Droppable droppableId='TodosList'>
      {
        (provided)=>( 
        
            <div className="todos" ref={provided.innerRef}
                                  {...provided.droppableProps}
            >
               <span className="todos__heading">
                 Active Tasks
               </span>
                {
                  todos.map((todo,index)=>(
                    <SingleTodo
                      index={index}
                      todo={todo}
                      todos={todos}
                      key={todo.id}
                      setTodos={setTodos}       
                    />
                  ))
                }
                {provided.placeholder} 
              </div>
            )
      }
      </Droppable>
      <Droppable droppableId='TodoRemove'>
        {
          (provided)=>

          (
              <div className="todos remove" ref={provided.innerRef}
                                            {...provided.droppableProps}
              >
                <span className="todos__heading">
                    Done Tasks
                  </span>
                  { 
                    completedTodos?.map((todo,index)=>(
                      <SingleTodo
                        index={index}
                        todo={todo}
                        todos={todos}
                        key={todo.id}
                        setTodos={setCompletedTodos}       
                      />
                    ))
                  }
                  {provided.placeholder}
              </div>
          )
        }
      </Droppable>
  </div>
  
  ) 
}

export default TodoList

/* 
<div className='todos'>
              {todos.map((todo)=>(
                <SingleTodo 
                    todo={todo} 
                    key={todo.id}
                    todos={todos}
                    setTodos={setTodos}    
                />
            ))}
  </div> */