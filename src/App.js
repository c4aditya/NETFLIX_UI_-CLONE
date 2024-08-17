
import './App.css';
import First_page from './rander_component/First_page';
import Signup from './rander_component/Signup';
import GatStaretd from './rander_component/GatStaretd';
import Createpassword from './rander_component/Createpassword'
import Home from './Moveis_page/Home';
import Footer from './rander_component/Footer';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
    
       <Router>
            <Routes>
                <Route path="/" element={<First_page />} />
                <Route path="/signup" element={<Signup/>} />
                <Route path='/getStarted' element={<GatStaretd/>}></Route>
                <Route path='/Createpassword' element={<Createpassword/>} ></Route>
                <Route path='/Home'  element={<Home/>} ></Route>
                
            </Routes>
        </Router>
        <Footer></Footer>
    </div>
  );
}

export default App;
