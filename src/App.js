import { Routes, Route } from 'react-router-dom'
import './App.css';
import MainLayout from './MainLayout';

//pages
import FormPageOne from './pages/FormPageOne';
import FormPageTwo from './pages/FormPageTwo';
import FormPageThree from './pages/FormPageThree';
function App() {
  return (
    <div className='container'>
    <Routes>
       <Route path='/' element={<MainLayout />}>
         <Route index element={<FormPageOne />}/> {/*page one*/}
         <Route path='/pageTwo' element={<FormPageTwo />} /> {/*page two*/}
         <Route path='/pageThree' element={<FormPageThree />} /> {/*page three*/}
         <Route /> {/* errors */}
       </Route> 
    </Routes>
    </div>
  );
}

export default App;
