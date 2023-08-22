import { Link } from 'react-router-dom';

const FormPageOne = ({ setActivePage }) => {
  return (
    <div className='pages pageOne'>
        <h1>FormPageOne</h1>
        <Link to='/pageTwo' onClick={() => setActivePage('2')}>Next</Link>
    </div>
  )
}

export default FormPageOne