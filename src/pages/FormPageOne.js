import { Form, Link, NavLink, useOutletContext } from 'react-router-dom';


const FormPageOne = () => {

  const [ setActivePage ] = useOutletContext();

  return (
    <div className='pages pageOne'>
        <h1>Personal Info</h1>
        <p>Please provide your name, email address and phone number</p>
        <Form className='form pageOneForm'>
          <label htmlFor="name">name</label>
          <input />
          <label htmlFor="email">email</label>
          <input />
          <label htmlFor="phone number">phone number</label>
          <input />
        </Form>
        <NavLink className='submit' to='/pageTwo' onClick={() => setActivePage('2')}>Next Step</NavLink>
    </div>
  )
}

export default FormPageOne