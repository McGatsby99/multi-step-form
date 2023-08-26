
import { useState } from "react";
import { Form, NavLink, useOutletContext  } from "react-router-dom"


const FormPageThree = () => {

  const [ setActivePage ] = useOutletContext();
  

  const [serviceChecked, setServiceChecked] = useState(false);
  const [storageChecked, setStorageChecked] = useState(false);
  const [profileChecked, setProfileChecked] = useState(false);


  return (
    <div className='pages pageThree' >
        <h1>Pick add-ons</h1>
        <p>Add-ons help enhance your gaming experience</p>
        <Form className="form pageThreeForm">

          <div className={`add-ons ${serviceChecked? 'checked': ''}`} >
            <input 
              className="checkbox service"  
              type="checkbox" 
              id="service" 
              name="service"
              onClick={() => setServiceChecked(!serviceChecked)}
              />
            <label htmlFor="services">
              Online services
            </label>
            <p>Access to multiple games</p>
            <span>+$1/mo</span>
          </div>

          <div className={`add-ons ${storageChecked? 'checked': ''}`} >
            <input 
              className="checkbox storage" 
              type="checkbox" 
              id="storage" 
              name="storage"
              onClick={() => setStorageChecked(!storageChecked)}
              />
            <label htmlFor="storage">Larger storage</label>
            <p>Extra 1TB of cloud save</p>
            <span>+$2/mo</span>
          </div>

          <div className={`add-ons ${profileChecked? 'checked': ''}`}>
            <input 
              className="checkbox profile" 
              type="checkbox" 
              id="profile" 
              name="profile"
              onClick={() => setProfileChecked(!profileChecked)}
              />
            <label htmlFor="profile">Customizable profile</label>
            <p>Custom theme on your profile</p>
            <span>+$2/mo</span>
          </div>

        </Form>
        <NavLink className='go-back' to='/pageTwo' onClick={() => setActivePage('2')}>Go back</NavLink>
        <NavLink className='next' to='/pageFour' onClick={() => setActivePage('4')}>Next Step</NavLink>
    </div>
  )
}

export default FormPageThree