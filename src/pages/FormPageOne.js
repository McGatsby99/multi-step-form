import { Form, NavLink, useOutletContext } from 'react-router-dom';


const FormPageOne = () => {

  const [ setActivePage ] = useOutletContext();

  return (
    <div className='pages pageOne'>
        <h1>Personal info</h1>
        <p>Please provide your name, email address and phone number</p>
        <Form className='form pageOneForm'>
          <label htmlFor="name">Name</label>
          <input type='text' placeholder='e.g. Ayanda'/>
          <label htmlFor="email">Email Address</label>
          <input type='email' placeholder='e.g. ayanda@email,com'/>
          <label htmlFor="phone number">Phone Number</label>
          <input type='text' placeholder='+27 727 262 328'/>
        </Form>
        <NavLink className='next' to='/pageTwo' onClick={() => setActivePage('2')}>Next Step</NavLink>
    </div>
  )
}

export default FormPageOne