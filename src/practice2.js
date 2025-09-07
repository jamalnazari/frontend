
import {useEffect , useState} from "react" ;
 
 function UsEf(){
   const [ne , setne]=useState('')
   const [qw , setqw]=useState('')
   const [kl , setkl]=useState(()=>{
    const saved=localStorage.getItem('name');
    return saved? JSON.parse(saved) : []
   } )

   const Add=()=>{
    if(ne===""){
     setqw('what is your plan')
    }else{
    setkl([...kl , ne])
    setne('')
    setqw("")
    
    }
   }

   useEffect(()=>{
    localStorage.setItem('name' , JSON.stringify(kl))
   },[kl])

   const ds=(e)=>{
    if(e.key==='Enter'){
      Add()
    } 
   }

    const remo=(id)=>{
      const nrwa=kl.filter((_  , lo)=>lo!==id
    )
       setkl(nrwa)
    }
    
   return(
    <div id="contaner" className="App fade-in-up App">

              <div className="circle small"></div>
      

      <div className="circle medium"></div>
       
      <div className="circle small"></div>
      <div className="circle medium"></div>
      <div className="circle large"></div>
      <div className="circle small"></div>
      <div className="circle medium"></div>
      <div className="circle large"></div>
      <div className="circle medium"></div>
      
      
      <input id="inpElem" value={ne} onChange={(e)=> { setne(e.target.value)}} onKeyPress={ds} placeholder="text your plan" ></input><br></br>
      <p id="er">{qw}</p>
      <button id="addBtn" onClick={Add}>Add plan</button>
      <ul>
        {
          kl.map((jk , index)=>(
            <li key={index} id="liElem">{jk}
            <button id="btnElem" onClick={()=>remo(index)}>remove</button>
            </li>
          ))
        }
      </ul>
    </div>
   )
  }
export default UsEf



/* 
function TodoList() {
  const [newTask, setNewTask] = useState("");
  const [tasks, setTasks] = useState([]);

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { id: Date.now(), text: newTask }]);
      setNewTask("");
    }
  };

  const removeTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="container">
      <h1>لیست کارهای روزانه</h1>
      <div className="input-container">
        <input
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="کار جدید را وارد کنید..."
          onKeyPress={(e) => e.key === 'Enter' && addTask()}
        />
        <button onClick={addTask}>افزودن</button>
      </div>
      
      <ul className="task-list">
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <li key={task.id}>
              <span>{task.text}</span>
              <button 
                onClick={() => removeTask(task.id)}
                className="delete-btn"
              >
                حذف
              </button>
            </li>
          ))
        ) : (
          <p className="empty-message">هیچ کاری ثبت نشده است</p>
        )}
      </ul>
      
      <div className="footer">
        <p>تعداد کارها: {tasks.length}</p>
      </div>
    </div>
  );
}

export default TodoList; 

 
function Tractice2(){
  const [ct , setct]=useState("")
  const [vb , setvb]=useState([])

  const clicked=()=>{
    setvb([ ...vb , ct])
    setct("")
  }

  return (
    <div>
      <input value={ct} onChange={(e)=> setct(e.target.value)}></input>
      <button onClick={clicked}>click</button>
      <ul>
        {vb.map((o , index)=>(
          <li key={index}>{o}</li>
        ))}
      </ul>
    </div>
  )
  }

export default Tractice2;

    
    return(
      <div style={{border:'1px solid ', marginTop:'43px'}}>
       
      
       <div> { props.ubvw}</div>
       <p>{props.city}</p>
       <h2>{props.rqmaw}</h2>
       <rql5>{props.ict}</rql5>


      </div>
    )
     
   return (
         
        <div className="suc">
            <button onClick={()=>{settextcoloe(textcolor==="red"? "white" : "red")}}>change color</button>
            <h1 style={{color:textcolor}}>jimi trading</h1>
        </div>
    )
       const [sd , setsd]=useState(3)
       const clicked1 = ()=>{
         setsd(sd>20? sd+2 : sd-1)
       }
       const clicked2 = ()=>{
         setsd(sd<=20? sd+2 : sd-1)
       }
       const clicked3 = ()=>{
         setsd(3)
       } 
        return(
            <div className="suc">
                {sd}
             <button onClick={clicked1}>1</button>
             <button onClick={clicked2}>2</button>
             <button onClick={clicked3}>-1</button>
            </div>
        )
            


  const [textInput, setTextInput] = useState("");
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (textInput.trim() === "") return;
    setTodos([...todos, textInput]);
    setTextInput("");
  };

  const removeTodo = (indexToRemove) => {
    setTodos(todos.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div>
      <input
        value={textInput}
        onChange={(e) => setTextInput(e.target.value)}
        placeholder="یک مورد جدید وارد کنید"
      />
      <button onClick={addTodo}>افزودن</button>
      
      <ul>
        {todos.map((todo, index) => (
          <div key={index} style={{ display: "flex", alignItems: "center", margin: "5px 0" }}>
            <li style={{ marginRight: "10px" }}>{todo}</li>
            <button 
              onClick={() => removeTodo(index)}
              style={{
                color: "red",
                background: "none",
                border: "none",
                cursor: "pointer"
              }}
            >
              ×
            </button>
          </div>
        ))}
      </ul>
    </div>
  );
 
  const [sw , setsw]=useState("")
  const [rt , setrt]=useState([])
  const nf=()=>{
  
     setrt([sw , ...rt])
     setsw("")
    
  }
  return(
    
    <div>
      
      <input value={sw} onChange={(e)=> setsw(e.target.value)}></input>
      <button onClick={nf}></button>
      <ul>
        {rt.map((lo , index)=>{
          return<li key={index}>{lo}</li>
        })}
      </ul>  
    </div>
  )
     */


