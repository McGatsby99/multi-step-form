import { Form, NavLink, useOutletContext  } from "react-router-dom"

const Summary = () => {

    const [ setActivePage ] = useOutletContext();

  return (
    <div className='pages pageFour'>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
        <Form className="form pageFourSummary">
          <div className="summary-container">
            <div className="plan-summary">plan</div>
            <hr/>
            <div className="extras-summary">add-ons</div>
          </div>
          <div className="total">total</div>
        </Form>
        <NavLink className='go-back' to='/pageThree' onClick={() => setActivePage('3')}>Go back</NavLink>
        <NavLink className='submit' to='/' onClick={() => setActivePage('4')}>submit</NavLink>
    </div>
  )
}

export default Summary