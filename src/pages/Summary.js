import { Form, NavLink, useOutletContext  } from "react-router-dom"

const Summary = () => {

    const [ setActivePage ] = useOutletContext();

  return (
    <div className='pages pageFour'>
        <h1>Finishing up</h1>
        <p>Double-check everything looks OK before confirming</p>
        <Form className="form pageFourSummary">
          <div className="summary-container">
            <div className="plan-summary">
              <p>Arcade (Yearly)</p>
              <NavLink className='change'>change</NavLink>
              <p className="summary-price">$90/yr</p>
              <hr/>
              </div>
            
            <div className="extras-summary">
              <p>online service</p>
              <p className="extras-price">+$10/yr</p>
            </div>
          </div>

          <div className="total">
            <p>Total (per year)</p>
            <p className="total-cost">$120/yr</p>
          </div>
        </Form>
        <NavLink className='go-back' to='/pageThree' onClick={() => setActivePage('3')}>Go back</NavLink>
        <NavLink className='next' to='/pageFive' onClick={() => setActivePage('1')}>Confirm</NavLink>
    </div>
  )
}

export default Summary