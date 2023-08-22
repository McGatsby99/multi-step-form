
import { Link, useOutletContext  } from 'react-router-dom';

const FormPageTwo = () => {

  const [ setActivePage ] = useOutletContext();

  return (
    <div className='pages pageTwo' >
        <h1>FormPagetwo</h1>
        <Link to='/pageThree' onClick={() => setActivePage('3')}>Next</Link>
    </div>
  )
}

export default FormPageTwo