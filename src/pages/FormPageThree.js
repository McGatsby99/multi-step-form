
import { Link, useOutletContext  } from "react-router-dom"


const FormPageThree = () => {

  const [ setActivePage ] = useOutletContext();

  return (
    <div className='pages pageThree' >
        <h1>FormPageThree</h1>
        <Link to='/' onClick={() => setActivePage('1')}>submit</Link>
    </div>
  )
}

export default FormPageThree