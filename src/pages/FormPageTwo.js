import { Link } from 'react-router-dom';

const FormPageTwo = () => {
  return (
    <div className='pages pageTwo' >
        <h1>FormPagetwo</h1>
        <Link to='/pageThree'>Next</Link>
    </div>
  )
}

export default FormPageTwo