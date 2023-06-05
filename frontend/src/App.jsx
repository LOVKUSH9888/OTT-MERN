import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from './pages/Login.jsx'
import Signup from './pages/Signup.jsx';
import Netflix from './pages/Netflix';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path = "/login" element = {<Login/>} />
        <Route exact path = "/signup" element = {<Signup/>} />
        <Route exact path = "/" element = {<Netflix/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App;
