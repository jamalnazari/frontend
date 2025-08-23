import { useState, useEffect } from "react";

function TodoList() {
  const [todos, setTodos] = useState(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputText, setInputText] = useState("");
  const [errorMessage, setErrorMessage] = useState('');

  
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);


  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addTodo();
    }
  };

  const addTodo = () => {
    if (inputText.trim() === "") {
      setErrorMessage("لطفاً یک کار وارد کنید");
    } else {
      setErrorMessage("");
      setTodos([...todos, {
        id: Date.now(),
        text: inputText,
        completed: false
      }]);
      setInputText("");
    }
  };
    
  const removeTodo = (id) => {
    const updatedTodos = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodos);
  };

  const toggleComplete = (id) => {
    const updatedTodos = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div>
      <input 
        value={inputText} 
        onChange={(e) => setInputText(e.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="کار جدید..."
      />
      <button onClick={addTodo}>اضافه کردن</button>
      {errorMessage && <p style={{color: 'red'}}>{errorMessage}</p>}
      <ul>
        {todos.map((todo) => (
          <li key={todo.id} style={{
            textDecoration: todo.completed ? 'line-through' : 'none',
            opacity: todo.completed ? 0.6 : 1
          }}>
            {todo.text}
            <button onClick={() => toggleComplete(todo.id)}>
              {todo.completed ? 'بازگشت' : 'تکمیل'}
            </button>
            <button onClick={() => removeTodo(todo.id)}>حذف</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;


/*
function TodoList(){
  const [re , setre] = useState("");
  const [qm , setqm] =useState([]);
  const [wb , setwb] =useState('')

  const handelSt=(e)=>{
    if(e.key==='Enter' ) {
        increase()     
    }
  }

  const increase = () => {
    if(re===""){
      setwb("برنامه خودرا وارد کنید")
    }else{
      setwb("")
      setqm([...qm , re])
      setre("");
    }
  };
    
  const removeHandler=(indexremove)=>{
    const newqm=qm.filter((_ , i)=>i!==indexremove)
    setqm(newqm)
  }
  return(
    <div>
      <input value={re} onChange={(e) =>setre(e.target.value)}  onKeyPress={handelSt}></input>
      <button onClick={increase}>addTodo</button>
      <p>{wb}</p>
      <ul>
        {qm.map((fg  ,index)=>(
          <li key={index}>
            {fg}
            <button onClick={()=>removeHandler(index)}>x</button>  
          </li>
                  
        ))}
      </ul>
    </div>
  )
}

export default TodoList;





















import React ,{useState} from "react";
 
function Practic() {

 const [ ki , setki]=useState(2);
  const Asd=()=>{
    setki(ki+2)
  }
  const Zxc=()=>{
    setki(ki-1)
  }

  return (
    <div className='suc'>
     <h2>{ki}</h2>
     <button onClick={Asd}>به علاوه دو</button>
      <button onClick={Zxc}>منهای یک </button>

    </div>
  );
 
 
}
  
function ToggleButton() {
  const [lo , setlo]=useState("jdf")
   const [ki , setki]=useState('iyfuy')
   const qwe=()=>setlo(lo +"ouerpg")
   const asd=()=>setlo("jdf")
   const ase=(ev)=>{
    setki(ev.target.value)
   }
  return(
    <div className="suc">
      <input type="text" onChange={ase}></input>
      <p style={{marginTop:"100px"}}>{lo}</p><br></br>
      {ki}
      <button onClick={qwe}>click</button>
      <button onClick={asd}>remove</button>

    </div>
    
  )  
}
   
  function SimpleTodo() {
  const [todos, setTodos] = useState(['Learn React']);
  const [input, setInput] = useState('');

  const addTodo = () => {
    setTodos([...todos, input]);
    setInput('');
  };

  return (
    <div>
      <input 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e)=> e.keyCode===13 && addTodo}
      />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

    </div>
  );
}




 
//export default ToggleButton;

export default SimpleTodo;

//export default Practic;
*/
