import { Routes, Route } from 'react-router-dom'
import './App.css';
import MainLayout from './MainLayout';

//react imports
import { useState } from 'react';

//pages
import FormPageOne from './pages/FormPageOne';
import FormPageTwo from './pages/FormPageTwo';
import FormPageThree from './pages/FormPageThree';
function App() {
  const [activePage, setActivePage] = useState('1');
  return (
    <div className='container'>
    <Routes>
       <Route path='/' element={<MainLayout activePage={activePage}/>}>
         <Route index element={<FormPageOne setActivePage={setActivePage}/>}/> {/*page one*/}
         <Route path='/pageTwo' element={<FormPageTwo setActivePage={setActivePage}/>} /> {/*page two*/}
         <Route path='/pageThree' element={<FormPageThree setActivePage={setActivePage}/>} /> {/*page three*/}
         <Route /> {/* errors */}
       </Route> 
    </Routes>
    </div>
  );
}

export default App;
