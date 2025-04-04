import './App.css';
import React,{useState} from 'react';
function App() {

  // making state of our application
  const [weight,setWeight] = useState(0);
  const [height,setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] =useState('');
  
  // Logic 

  
  let calBmi = (e) =>{

    e.preventDefault();
  
    if(weight===0 ||height===0)
    {
      alert('Pleace enter a valid weight and height')
    }
    else{
      let bmi =(weight/(height*weight)*703)
      setBmi(bmi.toFixed(1))
      if(bmi<25){
        setMessage('You are under weight')
      }
      else if(bmi>25 && bmi <30){
        setMessage('You are heathy weight')
      }
      else{
        setMessage('You are over weight')
      }
    }
  }
// Reload
  let reload = () =>{
    window.location.reload()
  }


  return (
    <div className="App">
       
      <div className='container'>
        <h1>BMI Calculator</h1>
        <form onSubmit={calBmi}>
          <div>
            <label>Weight(ibs)</label><br/>
            <input type='text' placeholder='Enter Weight Value' value={weight} onChange={(e) => setWeight(e.target.value)}/>
          </div>
          <div>
            <label>Height(in)</label><br/>
            <input type='text' placeholder='Enter Height Value' value={height} onChange={(e) => setHeight(e.target.value)}/>
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
