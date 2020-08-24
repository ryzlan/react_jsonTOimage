import React , { useState  }from 'react';

import './index.css'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';



import Main from './component/Main';

import InputFile from './component/InputFile';

// import jsondata from './data/data.json';

function App() {
  const [d , setdata ] = useState({data:[]});
  console.log(d)
  

  const handleChange=(e)=>{
    let files = e.target.files;
    console.log(files);
    let reader = new FileReader();
    reader.readAsText(files[0]);
    reader.onload=(e)=>{
      //console.warn("data", e.target.result );
       let data = JSON.parse( e.target.result);
       console.log(data);

      setdata({data:data})
      console.log(d)
       
    }
}
  
  
  return (
    <div className="container bd">
      
      <InputFile  handleChange={handleChange}/>
      {
        d.data.length >  0 ? 
        <Main data={d.data} />
        :
        <p>Error in the json File or Json File Empty</p>
      }
     
      
        
      </div>
  );
}

export default App;
