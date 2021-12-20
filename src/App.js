import React ,{useState,useFor}from 'react'
import './App.css';

function App() {
  const [soma, setsoma] = useState()
  const [n1, setn1] = useState()
  const [n2, setn2] = useState()
  const onSubmit =() =>{
   
     setsoma(n1+n2)
    
  }

  console.log(soma)


  
  

  return (
    
        <div className='calc' >
        
          <div className='body'>
          <center><h4>{process.env.REACT_APP_TITLE}</h4></center>
            <input type='number' name='n1' value={n1} onChange={e => setn1(e.target.valueAsNumber)} placeholder='Valor '/>
            <input type='number' name='n2' value={n2} onChange={e => setn2(e.target.valueAsNumber)} placeholder='Valor'/><br/>
            <div className='result'> 
            <button type='submit' onClick={onSubmit}>+</button>
            </div>
            <div className='soma'>
              {soma}
            </div>
            </div>
            
        </div>
      
    
  );
}

export default App;
