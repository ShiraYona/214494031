import logo from './logo.svg';
import './App.css';
import Date from './components/Date';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import GetDate from './components/GetDate';
function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Date />}></Route>
      <Route path='/getdate' element={<GetDate />}></Route>
    </Routes>
    </BrowserRouter>
   

  );
}

export default App;
