import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './App.css';
import MainLayout from './MainLayout';

//react imports
// import { useState } from 'react';

//pages
import FormPageOne from './pages/FormPageOne';
import FormPageTwo from './pages/FormPageTwo';
import FormPageThree from './pages/FormPageThree';


const router = createBrowserRouter(createRoutesFromElements(
       <Route path='/' element={<MainLayout />}>
         <Route index element={<FormPageOne />}/> 
         <Route path='/pageTwo' element={<FormPageTwo />} /> 
         <Route path='/pageThree' element={<FormPageThree />} /> 
         {/*<Route />  errors */}
       </Route>
))

function App() {
  return (  
      <RouterProvider router={router} />
  );
}

export default App;
