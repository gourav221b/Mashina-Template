import React,{useState} from 'react'
import './selector.css'
import {FiSearch} from 'react-icons/fi'
function Selector() {
  const MaxPrice="1500000"
  const [maxval,SetMaxVal]= useState(MaxPrice);
  function handleChange()
  {
    SetMaxVal(document.getElementById('customRange2').value)
  }
    return (
        <div className="divBig selectorDiv" >
            <div className="formDiv">
       <form className="selectorForm">
  <div className="form-row">
    <div className="form-group   col-md-3 col-xs-2">
     
    <select id="inputState" name="brand" className="form-control" required>
        <option defaultValue >Select Brand</option>
        <option>Lamborghini</option>
        <option>Mercedes</option>
        <option>BMW</option>
        <option>Audi</option>
      </select>
    </div>
    <div className="form-group   col-md-3 col-xs-2">
    <select id="inputState2" name="Make" className="form-control" required>
        <option defaultValue >Select Make</option>
        <option>Lamborghini</option>
        <option>Mercedes</option>
        <option>BMW</option>
      </select>
    </div>
    <div className="form-group   col-md-3 col-xs-2">
    <select id="inputState3" name="Location" className="form-control" required>
        <option defaultValue >Select Location</option>
        <option>United Kingdom</option>
        <option>United States of America</option>
        <option>Russia</option>
      </select>
    </div>
    <div className="form-group   col-md-3 col-xs-2">
    <select id="inputState4" name="Location" className="form-control" required>
        <option defaultValue >Select Type</option>
        <option>New Car</option>
        <option>Used Car</option>
        <option>Rental</option>
      </select>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group   col-md-3 col-xs-2">
     
    <select id="inputState5" name="Year" className="form-control" required>
        <option defaultValue >Select Year</option>
        <option>2021</option>
        <option>2019</option>
        <option>2018</option>
        <option>2017</option>
      </select>
    </div>
    <div className="form-group   col-md-3 col-xs-2">
     
    <select id="inputState6" name="Transmission" className="form-control" required>
        <option defaultValue >Select Transmission</option>
        <option>Automatic</option>
        <option>Manual</option>
      </select>
    </div>
    {/* <div className="form-group   col-md-3 col-xs-2">
    <select id="inputState6" name="Price" className="form-control" required>
        <option defaultValue >Select Price </option>
        <option>&gt;$100000</option>
        <option>$50000-$100000</option>
        <option>$10000-$50000</option>
        <option>&lt;$5000</option>
      </select>
    </div> */}
    <div className="form-group   col-md-3 col-xs-2">
 
<input type="range" className="form-range form-control rangeControl" min="0" max={MaxPrice} id="customRange2" step="0.5" defaultValue={MaxPrice} onChange={handleChange}/>
    <label htmlFor="customRange2" className="form-label rangeLabel"><span id="min">$0</span> <span id="max">${maxval}</span></label>
 
    </div>
    <div className="form-group   col-md-3 col-xs-2">
    <button type="submit" className="btn  col-md-12 submitBtn"><FiSearch/>&nbsp;Find</button>
    </div>
   
  </div>
 

</form>
</div>
        </div>
    )
}

export default Selector
