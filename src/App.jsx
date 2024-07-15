import {BrowserRouter, Routes, Route, useLocation} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Routes/Home';
import './App.css'


function App() {

  return (
    <>
     <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={
          <>
            <Header/>
            <Home/>
          </>
        }/>


      </Routes>
     
     </BrowserRouter>
    </>
  )
}

export default App
