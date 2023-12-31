
import { Outlet } from 'react-router-dom'
import { useState } from 'react';


const MainLayout = () => {

  const [activePage, setActivePage] = useState('1');

  return (
    <div className='container'>
        <nav>
          <div className="nav-container">
            <div className="steps">
              {/* <span className={`page-number ${ activePage === "1"? 'active': ''}`}><p>1</p></span> */}
              <span className={`page-number ${ activePage === "1"? 'active': ''}`}><p className={`${ activePage === "1"? 'active': ''}`}>1</p></span>
              <div className='text'>
                <p>STEP 1</p>
                <p className='category'>YOUR INFO</p>
              </div>
            </div>
            <div className="steps">
              <span className={`page-number ${ activePage === "2"? 'active': ''}`}><p className={`${ activePage === "2"? 'active': ''}`}>2</p></span>
              <div className='text'>
                <p>STEP 2</p>
                <p className='category'>SELECT PLAN</p>
              </div>
            </div>
            <div className="steps">
              <span className={`page-number ${ activePage === "3"? 'active': ''}`}><p className={`${ activePage === "3"? 'active': ''}`}>3</p></span>
              <div className='text'>
                <p>STEP 3</p>
                <p className='category'>ADD-ONS</p>
              </div>
            </div>
            <div className="steps">
              <span className={`page-number ${ activePage === "4"? 'active': ''}`}><p className={`${ activePage === "4"? 'active': ''}`}>4</p></span>
              <div className='text'>
                <p>STEP 4</p>
                <p className='category'>SUMMARY</p>
              </div>
            </div>
          </div>
        </nav>
        <Outlet context={[setActivePage] }/>
      </div>
  )
}

export default MainLayout