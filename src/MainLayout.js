
import { Outlet } from 'react-router-dom'


const MainLayout = ({ activePage }) => {

  return (
    <>
        <nav>
          <div class="nav-container">
            <div class="steps">
              <span class={`page-number ${ activePage === "1"? 'active': ''}`}><p>1</p></span>
              <div className='text'>
                <p>STEP 1</p>
                <p className='category'>YOUR INFO</p>
              </div>
            </div>
            <div class="steps">
              <span class={`page-number ${ activePage === "2"? 'active': ''}`}><p>2</p></span>
              <div className='text'>
                <p>STEP 2</p>
                <p className='category'>SELECT PLAN</p>
              </div>
            </div>
            <div class="steps">
              <span class={`page-number ${ activePage === "3"? 'active': ''}`}><p>3</p></span>
              <div className='text'>
                <p>STEP 3</p>
                <p className='category'>ADD-ONS</p>
              </div>
            </div>
            <div class="steps">
              <span class={`page-number ${ activePage === "4"? 'active': ''}`}><p>4</p></span>
              <div className='text'>
                <p>STEP 4</p>
                <p className='category'>SUMMARY</p>
              </div>
            </div>
          </div>
        </nav>
        <Outlet />
    </>
  )
}

export default MainLayout