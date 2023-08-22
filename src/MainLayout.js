import { Outlet } from 'react-router-dom'
// import  bgSidebar  from './assets/images/bg-sidebar-desktop.svg'

const MainLayout = () => {
  return (
    <>
        <nav>
            {/* <img src={bgSidebar} alt="background art" /> */}
        </nav>
        <Outlet />
    </>
  )
}

export default MainLayout