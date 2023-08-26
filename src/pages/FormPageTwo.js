
import { useState } from 'react';
import { Form, NavLink, useOutletContext } from 'react-router-dom';
// Icons
import arcade from '../assets/images/icon-arcade.svg'
import advanced from '../assets/images/icon-advanced.svg'
import pro from '../assets/images/icon-pro.svg'

const FormPageTwo = () => {

  const [ setActivePage ] = useOutletContext();

  const [checked, setChecked] = useState(false)


  return (
    <div className='pages pageTwo' >
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing</p>
        <Form className='form pageTwoForm'>
        {/* add aria labels */}

          <div className="arcade select">
            <div className="content">
              <img src={arcade} alt="arcade icon" width={30}/>
              <section>
                <p>Arcade</p>
                <span>$9/mo</span>
              </section>
            </div>
          </div>

          <div className="advanced select">
            <div className="content">
              <img src={advanced} alt="advanced icon" width={30} />
              <section>
                <p>Advanced</p>
                <span>$12/mo</span>
              </section>
            </div>
          </div>

          <div className="pro select">
            <div className="content">
              <img src={pro} alt="pro icon" width={30}/>
              <section>
                <p>Pro</p>
                <span>$15/mo</span>
              </section>
            </div>
          </div>

          <div className='toggle'>
            {/* <span className='duration'>Monthly</span> */}
            <span className={`duration ${checked?'': 'bold'}`}>Monthly</span>
            <label className="switch">
              <input type="checkbox" onClick={() => setChecked(!checked)}/>
              <span className="slider round"></span>
            </label>
            <span className={`duration ${checked?'bold': ''}`}>Yearly</span>
          </div>
        </Form>
        <NavLink className='go-back' to='/' onClick={() => setActivePage('1')}>Go back</NavLink>
        <NavLink className='next' to='/pageThree' onClick={() => setActivePage('3')}>Next Step</NavLink>
    </div>
  )
}

export default FormPageTwo