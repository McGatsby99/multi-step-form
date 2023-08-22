import { Link } from 'react-router-dom';

const FormPageOne = () => {
  return (
    <div className='pages pageOne'>
        <h1>FormPageOne</h1>
        <Link to='/pageTwo'>Next</Link>
    </div>
  )
}

export default FormPageOne