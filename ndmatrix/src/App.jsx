
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Components/Home.jsx';
function App() {


  return (
    <div>
    <Router>
      

        <Routes>
          <Route path="/" element={<Home />} />
          
        </Routes>
    
    </Router>
    </div>
  )
}

export default App
