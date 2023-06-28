import React,{useRef} from 'react'
import './InputField.css'

interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>;
    handleAdd:(event: React.FormEvent)=>void;
}

const InputField: React.FC<Props> = ({ todo, setTodo,handleAdd }) => {
    const inputRef = useRef<HTMLInputElement>(null)

  return (
    <form className='input' onSubmit={(event)=>{
            handleAdd(event)
            inputRef.current?.blur();    
            
        }}>

        <input 
            ref={inputRef}
            type="input" 
            value={todo}
            onChange={(event)=>setTodo(event.target.value)}
            placeholder='Enter a text' 
            className='input_box'  
        />
        <button className='input_submit' type='submit'>
            Go
        </button>
    </form>
  )
}

export default InputField