import { NavLink, useOutletContext } from "react-router-dom"
import ThankYouIcon from '../assets/images/icon-thank-you.svg'

const ThankYou = () => {

  const [ setActivePage ] = useOutletContext();

  return (
    <div className='pages pageFive'>
        
        <img className="img-thanks" src={ThankYouIcon} alt="thank you icon" width={80}/>
        <h1>Thank You!</h1>
        <p>Thanks for confirming your subscription! We hope you have fun using our platform. If you ever need support, please feel free to email us at support@loremgaming.com</p>


        <NavLink className='go-back' to='/pageThree' onClick={() => setActivePage('4')}>Go back</NavLink>
        <NavLink className='next' to='/' onClick={() => setActivePage('1')}>Confirm</NavLink>
    </div>
  )
}

export default ThankYou