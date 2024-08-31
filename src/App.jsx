import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Routes/Home';
import About from './Routes/University';
import './App.css'
import University from './Routes/University';
import SwitchButton from './Components/SwitchButton';

function App() {

  return (
    <>
     <BrowserRouter>
      <Header/>
      <SwitchButton/>
      <Routes>
        <Route path='/FullstackPort' element={
          <>
            <Home/>
          </>
        }/>

        <Route path='/University' element={
          <>
            <University/>
          </>
        }/>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
