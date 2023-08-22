import { Link } from 'react-router-dom';

const FormPageTwo = ({ setActivePage }) => {
  return (
    <div className='pages pageTwo' >
        <h1>FormPagetwo</h1>
        <Link to='/pageThree' onClick={() => setActivePage('3')}>Next</Link>
    </div>
  )
}

export default FormPageTwo