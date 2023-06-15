import { useState } from 'react'

import { CountryDropdown, RegionDropdown } from 'react-indian-state-region-selector/lib/rcrs';

function Register() {

  
  const [region, setRegion] = useState("");
  const [state, setState] = useState("ABC");
  const [socName, setSocName] = useState("");
  const [add, setAdd] = useState("");
  const [oppArea, setOppArea] = useState([])
  const [area, setArea] = useState("")

  function addOppArea(val){
    
    setOppArea([...oppArea, val]);
  }

  function clearOppArea(){
    setOppArea([]);
  }
  function SelectState(val){
    setRegion(val);
  }
  return(
    <div>
      <h1>Welcome To CRCS Registration Portal</h1>
      <h2>Select Registration Details Here</h2>
      <form>

        <div className='Date RegField'>
          <label> <b>Registration Date:    </b></label>
          {Date().toString()}
        </div>
       
        <div className='SocityName RegField'>
          <label>Socity Name: </label>
          <input type='text' onChange={(e) => setSocName(e.target.value)}></input>
        </div>

        <div className='Address RegField'>
          <label>Address: </label>
          <textarea onChange={(e) => setAdd(e.target.value)}/>
        </div>

        <div className='State RegField'>
          <label>Select State: </label>
          <CountryDropdown value = {state} onChange = {(e)=>setState(e)}/>
        </div>
       
       <div className='District RegField'>
          <label>Select District: </label>
          <RegionDropdown value = {region} country={state} onChange = {(e)=>setRegion(e)}/>
      </div>

      <div className='OppAreaSelector RegField'>

        <label>Operation Area: </label>
        <CountryDropdown value={area} onChange={(e)=>{
          addOppArea(e)
          setArea(e)}}/>
        <ul style={{textAlign:"left"}}>
        {oppArea.map((area)=>{
          return(
            <li key={area}>{area}</li>
          )
        })}
        </ul>
        {oppArea.length > 0 ? <h3 onClick={clearOppArea} style={{color:"red"}}>CLEAR</h3> : <h6>No Operation Area Selected</h6>}
        
      </div>

      <div className='Sector RegField'>
        <label>Enter Sector: </label>
        <input type='text'/>
      </div>
        <div className='SubmitButton'>
            <button type='submit'>Submit</button>
        </div>
      </form>

      
    </div>
  );
  
}


export default Register